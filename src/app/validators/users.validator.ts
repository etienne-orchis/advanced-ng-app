import { Injectable } from '@angular/core';
import {
  AbstractControl,
  AsyncValidatorFn,
  ValidationErrors,
} from '@angular/forms';
import { Observable, catchError, map, of } from 'rxjs';
import {
  ICheckExistingUser,
  UsersService,
} from '../services/users.service';

@Injectable({
  providedIn: 'root',
})
export class UsersValidator{
  constructor(private readonly usersService: UsersService) {}

  userExistsValidator(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      if (!control.value) {
        return of(null);
        // Return null if username field is empty
      }

      return this.usersService.checkIfUserExists(control.value).pipe(
        map((data: ICheckExistingUser) =>
          data.isExistingUser ? { isExistingUser: true } : null
        ),
        catchError(() => of(null))
        // Return null if any error occurs
      );
    };
  }
}
