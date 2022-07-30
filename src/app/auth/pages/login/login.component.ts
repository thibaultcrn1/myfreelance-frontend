import { Component, OnInit } from '@angular/core';
import { ToastService } from 'angular-toastify';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _toastService: ToastService) { }

  ngOnInit(): void {

  }

  onClickSubmit(data: any) {
    console.log(data);
  }

  

}
