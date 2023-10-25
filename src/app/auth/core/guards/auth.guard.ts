import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { VerifyTokenService } from 'src/app/services/verify-token/verify-token.service';
import { SessionLoginService } from '../../../services/session-login/session-login.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    token!: string;

    constructor(private auth: SessionLoginService, private router: Router, private sessionLogin: SessionLoginService, private verifyToken: VerifyTokenService) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

        this.token = this.auth.token;

        if(this.token) {
            return true;
        } else {
            this.router.navigate(['/', 'login']);
            return false;
        }


    }

}