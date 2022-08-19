import { Component, OnInit } from '@angular/core';
import { ToastService } from 'angular-toastify';
import { forgotPassword } from 'src/utils/api';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(private _toastService: ToastService) { }

  ngOnInit(): void {
  }

  onClickSubmit(data: any) {

    const email = data.email;

    if(!email) return this._toastService.warn("Vous n'avez pas mentionné d'adresse email.");

    forgotPassword(email)
    .then(() => {
      return this._toastService.success('Un email de réinitialisation vous as été envoyé.');
    })
    .catch((err) => { 
      console.log(err);
      return this._toastService.error("Cette adresse mail n'existe pas.");
    })

  }

}
