import { HttpEvent, HttpHandler, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SessionLoginService } from '../../services/session-login/session-login.service';

@Injectable({
  providedIn: 'root'
})
export class JwtAuthorizationInterceptorsService {

  constructor(private sessionLogin: SessionLoginService) { }
  intercept(req: HttpRequest<any>, next:HttpHandler): Observable<HttpEvent<any>> {

    let token = this.sessionLogin.token;
    
    let jwtToken = req.clone({

      setHeaders: {
        Authorization: 'Bearer ' + token
      }

    })

    return next.handle(jwtToken);

  }
}

export const JwtAuthorizationInterceptorsProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: JwtAuthorizationInterceptorsService,
  multi: true
}
