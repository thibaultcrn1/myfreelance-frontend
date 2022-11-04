import { Component, OnInit } from '@angular/core';
import { ToastService } from 'angular-toastify';
import { Router } from '@angular/router';
import { SessionLoginService } from 'src/app/services/session-login/session-login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private _toastService: ToastService, private router: Router, private sessionLogin: SessionLoginService) { }

  ngOnInit(): void {
  }

  onClickSubmit(data: any) {

    const firstname = data.firstname;
    const lastname = data.lastname;
    const email = data.email;
    const first_password = data.pass;
    const password_confirmation = data.pass_confirm;

    if(!lastname) return this._toastService.warn("Vous n'avez pas mentionné de nom.");
    if(!firstname) return this._toastService.warn("Vous n'avez pas mentionné de prénom.");
    if(!email) return this._toastService.warn("Vous n'avez pas mentionné d'adresse email.");
    if(!first_password) return this._toastService.warn("Vous n'avez pas mentionné de mot de passe.");
    if(!password_confirmation) return this._toastService.warn("Vous n'avez pas confirmé votre mot de passe.");

    if(first_password === password_confirmation) {

      const password = first_password;
      if(!password) return;

      this.sessionLogin.register(firstname, lastname, email, password)
      .subscribe(result => {
        this._toastService.success("Compte créer avec succès.");
        return this.router.navigate(['/', 'login']);
      }, err => {
        return this._toastService.error('Adresse mail déjà utilisé.');
      })

    } else {

      return this._toastService.error("Le mot de passe ne correspond pas.");
      
    }


  }

}
