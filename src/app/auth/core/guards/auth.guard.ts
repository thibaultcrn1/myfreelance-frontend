import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { SessionLoginService } from '../../../services/session-login/session-login.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(private auth: SessionLoginService, private router: Router, private sessionLogin: SessionLoginService) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

        const token = this.auth.token;

        if(token) {
            return true;
        } else {
            this.router.navigate(['/', 'login']);
            return false;
        }


    }

}