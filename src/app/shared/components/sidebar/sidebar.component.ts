import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetUsersInformationsService } from 'src/app/services/get-users-informations/get-user-informations.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  username!: string;

  constructor(private router: Router, private userService: GetUsersInformationsService) { }

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

  }

}
