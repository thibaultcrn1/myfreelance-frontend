import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { userInfo, generateAccessToken } from 'src/utils/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  username!: string;

  constructor(private cookie: CookieService, private router: Router) { }

  ngOnInit(): void {

    //const connect = this.cookie.get('connect.sid');
    //if(connect === null) return this.router.navigate(['/', 'login']);
    
    //const accessToken = this.cookie.get('MyFreelanceAccess');
    //const refreshToken = this.cookie.get('MyFreelanceRefresh');

    //if(refreshToken === null) return this.router.navigate(['/', 'login']);
    //if(accessToken === null) generateAccessToken(refreshToken);

    //userInfo(accessToken)
    //.then((result) => {
    //  return this.username = result.data[0].firstname
    //})
    //.catch((err) => {
    //  return this.router.navigate(['/', 'login']);
    //});

    this.username = "Thibault";

  }

}
