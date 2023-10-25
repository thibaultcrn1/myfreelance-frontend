import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetUsersInformationsService } from 'src/app/services/get-users-informations/get-user-informations.service';
import { SessionLoginService } from 'src/app/services/session-login/session-login.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  username!: string;

  constructor(private router: Router, private userService: GetUsersInformationsService, private sessionLogin: SessionLoginService, private cookieService: CookieService) { }

  ngOnInit(): void {

    this.userService.getUserInformations()
      .subscribe(result => {
        this.username = result.firstname;
      }, err => {
        console.log(err);
        return this.router.navigate(['/', 'login']);
      })

  }

  logoutUser() {

    this.cookieService.delete('mf_accessToken');
    this.cookieService.delete('mf_refreshToken');
    return this.router.navigate(['/', 'login']);

  }

}
