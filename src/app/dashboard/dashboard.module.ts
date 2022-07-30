import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StockComponent } from './stock/stock.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { StaffComponent } from './staff/staff.component';
import { SharedModule } from '../shared/shared.module';
import { CheckoutComponent } from './checkout/checkout.component';
import { ClientComponent } from './client/client.component';
import { QuotationComponent } from './quotation/quotation.component';
import { ChartsComponent } from './charts/charts.component';
import { CalendarComponent } from './calendar/calendar.component';

@NgModule({
  declarations: [
    DashboardComponent,
    StockComponent,
    InvoiceComponent,
    StaffComponent,
    CheckoutComponent,
    ClientComponent,
    QuotationComponent,
    ChartsComponent,
    CalendarComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
