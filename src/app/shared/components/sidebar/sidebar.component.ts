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

    const accessToken = this.cookie.get('myFreelance_accessToken');
    const refreshToken = this.cookie.get('myFreelance_refreshToken');

    if(refreshToken == null) this.router.navigate(['/', 'login']);

    userInfo(accessToken).then((result) => {
      return this.username = result.data.firstname || 'not defined';
    })
    .catch((err) => {
      return this.router.navigate(['/', 'login']);
    })

  }

}
