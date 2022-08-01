import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

import { CalendarComponent } from './calendar/calendar.component';
import { ChartsComponent } from './charts/charts.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ClientComponent } from './client/client.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { QuotationComponent } from './quotation/quotation.component';
import { StaffComponent } from './staff/staff.component';
import { StockComponent } from './stock/stock.component';

@NgModule({
  declarations: [
    CalendarComponent,
    ChartsComponent,
    CheckoutComponent,
    ClientComponent,
    DashboardComponent,
    InvoiceComponent,
    QuotationComponent,
    StaffComponent,
    StockComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    RouterModule
  ],
  bootstrap: [DashboardComponent]
})
export class DashboardModule { }
