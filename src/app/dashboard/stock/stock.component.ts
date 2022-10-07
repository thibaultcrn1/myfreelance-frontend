import { Component, OnInit } from '@angular/core';

import { getCategoryList } from '../../../utils/api';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {

    getCategoryList().then((result) => {
      result.data.categorys.map((item: any) => {
        console.log(item);
      })
    });


  }

}
