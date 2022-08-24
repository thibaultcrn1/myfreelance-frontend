import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  showModal: boolean = false;

  constructor() { }

  ngOnInit(): void {

  }

  selectItem() {
    this.showModal = true;
  }

}
