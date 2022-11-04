import { Component, OnInit } from '@angular/core';
import { ToastService } from 'angular-toastify';
import { Router } from '@angular/router';
import { SessionLoginService } from 'src/app/services/session-login/session-login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _toastService: ToastService, private router: Router, private sessionLogin: SessionLoginService) { }

  ngOnInit(): void {

  }

  onClickSubmit(data: any) {

    const email = data.email;
    const password = data.pass;

    if(!email) return this._toastService.warn("Vous n'avez pas mentionné d'adresse email.");
    if(!password) return this._toastService.warn("Vous n'avez pas mentionné de mot de passe.");

    this.sessionLogin.login(email, password).subscribe(result => {
      console.log(result);
      console.log(this.sessionLogin.token);
      this._toastService.success('Authentification réussis.');
      return this.router.navigate(['/', 'dashboard']);
    }, err => {
      console.log(err);
      return this._toastService.error('Identifiants invalides.');
    });


  

  }

  

}
