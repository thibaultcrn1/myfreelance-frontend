import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import * as moment from 'moment';

import { getStockList, usersInfo } from '../../../utils/api';

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

  constructor(private cookie: CookieService) { }

  ngOnInit(): void {

    const accessToken = this.cookie.get('myFreelance_accessToken');

    this.date = moment().format("DD/MM/YYYY");
    usersInfo(accessToken).then((result) => {
      this.clients = result.data.length
    })
    getStockList().then((result) => {
      this.articles = result.data.length;
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
