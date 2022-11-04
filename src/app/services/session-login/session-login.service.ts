import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SessionLoginService {

  private _isLoggedIn$ = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this._isLoggedIn$.asObservable();

  LOGIN_URL = "/auth/login";
  LOGOUT_URL = "/auth/logout";
  REGISTER_URL = "/auth/register";
  FORGOT_URL = "/auth/forgot-password";

  constructor(private httpClient: HttpClient, private cookie: CookieService, private router: Router) { }

  get token() {
    return this.cookie.get('mf_accessToken');
  }

  login(
    email: string, 
    password: string
  ) {

    const loginData = {
      email: email,
      password: password
    }

    return new Observable<boolean>((observer) => {
      this.httpClient.post(environment.API_URL + this.LOGIN_URL, loginData, { withCredentials: true })
      .subscribe(result => {
        observer.next(true);
        observer.complete();
      }, err => {
        observer.next(false);
        observer.complete();
      });
    })

  }

  register(
    firstname: String, 
    lastname: String, 
    email: String, 
    password: String
  ) {

    const registerData = {
      fistname: firstname,
      lastname: lastname,
      email: email,
      password: password
    }

    return new Observable<boolean>((observer) => {
      this.httpClient.post(environment.API_URL + this.REGISTER_URL, registerData)
      .subscribe(result => {
        observer.next(true);
        observer.complete();
      }, err => {
        observer.next(false);
        observer.complete();
      })
    })

  }

  logout() {

    return new Observable<boolean>((observer) => {
      this.httpClient.delete(environment.API_URL + this.LOGOUT_URL, { withCredentials: true })
      .subscribe(result => {
        observer.next(true);
        observer.complete();
      }, err => {
        observer.next(false);
        observer.complete();
      })
    })

  }

  forgotPassword( email: String ) {

    const forgotData = {
      email: email
    }

    return new Observable<boolean>((observer) => {

      this.httpClient.put(environment.API_URL + this.FORGOT_URL, forgotData)
      .subscribe(result => {
        observer.next(true);
        observer.complete();
      }, err => {
        observer.next(false);
        observer.complete();
      })

    })

  }

  
}
