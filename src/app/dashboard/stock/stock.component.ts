import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetItemsInformationsService } from 'src/app/services/get-items-informations/get-items-informations.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {
  
  categorys!: any;
  stocks!: any;

  constructor(private getItems: GetItemsInformationsService, private router: Router) { }

  ngOnInit(): void {

    this.getItems.getCategoryList()
    .subscribe(result => {
      console.log(result);
      this.categorys = result;
    }, err => {
      console.log(err);
    })

    this.getItems.getStockList()
    .subscribe(result => {
      console.log(result);
      this.stocks = result;
    }, err => {
      console.log(err);
    })  

  }

}
