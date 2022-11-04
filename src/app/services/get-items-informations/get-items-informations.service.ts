import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GetItemsInformationsService {

  STOCK_URL = '/stock/get';

  constructor(private httpClient: HttpClient) { }

  getStockList() {

    return new Observable<any>((observer) => {
      this.httpClient.get(environment.API_URL + this.STOCK_URL, { withCredentials: true })
      .subscribe(result => {
        observer.next(result);
        observer.complete();
      }, err => {
        observer.next(err);
        observer.complete();
      })
    })

  }

  getCategoryList() {

  }

}
