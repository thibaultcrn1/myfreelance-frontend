import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastService } from 'angular-toastify';
import { SessionLoginService } from 'src/app/services/session-login/session-login.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(private _toastService: ToastService, private sessionLogin: SessionLoginService, private router: Router) { }

  ngOnInit(): void {
  }

  onClickSubmit(data: any) {

    const email = data.email;

    if(!email) return this._toastService.warn("Vous n'avez pas mentionné d'adresse email.");

    this.sessionLogin.forgotPassword(email)
    .subscribe(result => {
      this._toastService.success('Un email de réinitialisation vous as été envoyé.');
      return this.router.navigate(['/', 'login']);
    }, err => {
      return this._toastService.error('Cette adresse mail n\'existe pas.')
    })

  }

}
