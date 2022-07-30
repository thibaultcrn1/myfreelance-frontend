import { Component, OnInit } from '@angular/core';
import { register } from 'src/utils/api';
import { ToastService } from 'angular-toastify';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private _toastService: ToastService) { }

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

      register(firstname, lastname, email, password)
      .then(() => this._toastService.success("NICE"))
      .catch((err) => {
        this._toastService.error("Erreur lors de l'enregistrement, l'adresse mail est déjà utilisé.");

        return console.log(err);
      });
    } else {
      return this._toastService.error("Mot de passe incorrecte.");
    }


  }

}
