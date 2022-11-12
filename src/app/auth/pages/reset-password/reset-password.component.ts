import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastService } from 'angular-toastify';
import { SessionLoginService } from 'src/app/services/session-login/session-login.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  id!: any;

  constructor(private route: ActivatedRoute, private router: Router, private sessionLogin: SessionLoginService, private _toastService: ToastService) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
    }, err => {
      console.log(err);
    });

  }

  onClickSubmit(data: any) {

    console.log(data);
    console.log(this.id);

    if(data.passwordconf === data.password) {

      this.sessionLogin.resetPassword(this.id, data.password)
      .subscribe(result => {
        console.log(result);
        this._toastService.success('Le mot de passe à été changer avec succès.');
        return this.router.navigate(['/', 'login']);
      }, err => {
        console.log(err);
        return this.router.navigate(['/', 'forgot-password']);
      })

    } else {
      this._toastService.error('Les mots de passes ne sont pas identiques.')
    }

  }

}
