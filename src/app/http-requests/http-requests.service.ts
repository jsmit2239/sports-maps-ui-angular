import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsersResponse } from './user-response.interface';

@Injectable()
export class HttpRequestsService {
  constructor(private http: HttpClient) {}

  getUsersObservable() {
    /**
     * Here, "users" is the Observable
     *
     * Note: In a real application, we probably wouldn't call
     * this the usersObservable. That could be inferred by the
     * type. We we just call it "users".
     */
    const usersObservable: Observable<Object> = this.http.get<UsersResponse>(
      `https://reqres.in/api/users`
    );

    return usersObservable;
  }
}
