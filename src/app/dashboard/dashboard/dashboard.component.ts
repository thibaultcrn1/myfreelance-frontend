import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { GetItemsInformationsService } from 'src/app/services/get-items-informations/get-items-informations.service';
import { GetUsersInformationsService } from 'src/app/services/get-users-informations/get-user-informations.service';

import { getStockList } from '../../../utils/api';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  date!: string;
  clients!: string;
  articles!: string;
  factures!: string;
  notva!: string;
  tva!: string;
  maxtva!: string;
  chiffre!: string;
  year!: string;

  constructor(private userService: GetUsersInformationsService, private itemsService: GetItemsInformationsService, private router: Router) { }

  ngOnInit(): void {

    this.date = moment().format("DD/MM/YYYY");
    this.userService.getUsersInformations()
    .subscribe(result => {
      this.clients = result.length.toString();
    }, err => {
      console.log(err);
      return this.router.navigate(['/', 'login']);
    })
    this.itemsService.getStockList()
    .subscribe(result => {
      this.articles = result.length.toString();
    }, err => {
      console.log(err);
      return this.router.navigate(['/', 'login']);
    })
    this.factures = "0";
    this.notva = "100";
    this.tva = "1500";
    this.maxtva = "10000";
    this.chiffre = "0";
    this.year = moment().format('YYYY');

  }

  public data = [
    {
      x: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
      y: [14500, 23000, 50400, 3444, 2345, 23333, 55555, 17893, 37282, 29019, 29301, 29302],
      type: 'bar'
    }
  ]

  public layout = {
    title: "Chiffre d'affaires",
    showlegend: false,
    width: 800,
    height: 330,
    xaxis: {
      autotick: false,
      showgrid: false,
      zeroline: false
    },
    yaxis: {
      showticklabels: false,
      autotick: false,
      showgrid: false,
      zeroline: false
    },
  }

  public config = {
    displayModeBar: false,
    locale: 'fr',
    responsive: true
  }

}
