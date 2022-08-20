import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  date!: string;
  best_client!: string;
  articles!: string;

  constructor() { }

  ngOnInit(): void {

    this.date = moment().format("DD/MM/YYYY");
    this.best_client = "John Doe";
    this.articles = "0";

  }

}
