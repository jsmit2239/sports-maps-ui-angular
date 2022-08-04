import { Component, OnInit } from '@angular/core';
import { HttpRequestsService } from './http-requests.service';

@Component({
  selector: 'app-http-requests',
  templateUrl: './http-requests.component.html',
  styleUrls: ['./http-requests.component.css'],
})
export class HttpRequestsComponent implements OnInit {
  constructor(private httpRequestsService: HttpRequestsService) {}

  users: any;

  ngOnInit(): void {
    /**
     * Get the Observable that was created in the HttpRequestsService
     */
    const usersObservable = this.httpRequestsService.getUsersObservable();

    /**
     * Subscribe to the Observable.
     *
     * The one parameter to pass in is an anonymous function where the input
     * is the value coming back from the Observable "stream", and we'll take
     * that value and set it equal to the users variable in this class.
     *
     * TODO: figure out how to type
     */
    usersObservable.subscribe(
      (dataFromObservable: any) => (this.users = dataFromObservable.data)
    );
  }

  getUsers() {
    return this.users;
  }
}
