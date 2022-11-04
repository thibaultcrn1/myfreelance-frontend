import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GetUsersInformationsService {

  USER_URL = '/auth/user';
  USERS_URL = '/auth/users';

  constructor(private httpClient: HttpClient) { }

  getUsersInformations() {

    return new Observable<any>((observer) => {
      this.httpClient.get(environment.API_URL + this.USERS_URL, { withCredentials: true })
      .subscribe(result => {
        observer.next(result);
        observer.complete();
      }, err => {
        observer.next(err);
        observer.complete();
      })
    })

  }

  getUserInformations() {

    return new Observable<any>((observer) => {
      this.httpClient.get(environment.API_URL + this.USER_URL, { withCredentials: true })
      .subscribe(result => {
        observer.next(result);
        observer.complete();
      }, err => {
        observer.next(err);
        observer.complete();
      })

    })

  }
}
