import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VerifyTokenService {

  constructor(private httpClient: HttpClient) { }

  VERIFY_TOKEN_URL='/auth/verifyToken';

  verifyToken(token: String) {

    const verifyTokenData = {
      accessToken: token
    }

    return new Observable<boolean>((observer) => {
      this.httpClient.post(environment.API_URL + this.VERIFY_TOKEN_URL, verifyTokenData, { withCredentials: true })
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
