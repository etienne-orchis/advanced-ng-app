import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface ICheckExistingUser {
  isExistingUser: boolean;
}
@Injectable({
  providedIn: 'root',
})
export class CheckExistingUserService {
  constructor(private readonly http: HttpClient) {}

  checkIfUserExists(username: string): Observable<ICheckExistingUser> {
    return this.http.get<ICheckExistingUser>(
      `http://localhost:3000/api/user/${username}`
    );
  }
}
