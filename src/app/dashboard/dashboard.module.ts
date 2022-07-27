import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StockComponent } from './stock/stock.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { StaffComponent } from './staff/staff.component';


@NgModule({
  declarations: [
    DashboardComponent,
    StockComponent,
    InvoiceComponent,
    StaffComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
