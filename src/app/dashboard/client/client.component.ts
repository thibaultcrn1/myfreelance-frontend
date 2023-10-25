import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetUsersInformationsService } from 'src/app/services/get-users-informations/get-user-informations.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  lastname!: String;
  firstname!: String;
  email!: String;
  creationDate!: String;
  id!: String;

  constructor(private getUserInformations: GetUsersInformationsService, private router: Router) { }

  ngOnInit(): void {

    this.getUserInformations.getUserInformations()
    .subscribe(result => {
      this.lastname = result.lastname;
      this.firstname = result.firstname;
      this.email = result.email;
      this.creationDate = result.date;
      this.id = result.id;
      console.log(result);
    }, err => {
      this.router.navigate(['/', 'login']);
    })

  }

}
