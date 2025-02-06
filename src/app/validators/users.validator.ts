import { Injectable } from '@angular/core';
import {
  AbstractControl,
  AsyncValidatorFn,
  ValidationErrors,
} from '@angular/forms';
import { Observable, catchError, map, of, switchMap, timer } from 'rxjs';
import { ICheckExistingUser, UsersService } from '../services/users.service';

@Injectable({
  providedIn: 'root',
})
export class UsersValidator {
  constructor(private readonly usersService: UsersService) {}

  userExistsValidator(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      if (!control.value) {
        return of(null);
      }

      // Start a 300ms timer before calling the API
      return timer(300).pipe(
        // Switch to API call after debounce
        switchMap(() => this.usersService.checkIfUserExists(control.value)),

        // Check the validity
        map((response: ICheckExistingUser) =>
          response.isExistingUser ? { isExistingUser: true } : null
        ),

        // Handle an error if any
        catchError(() => of(null))
      );
    };
  }
}
