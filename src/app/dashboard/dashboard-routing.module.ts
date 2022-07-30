import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';
import { ChartsComponent } from './charts/charts.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ClientComponent } from './client/client.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { QuotationComponent } from './quotation/quotation.component';
import { StaffComponent } from './staff/staff.component';
import { StockComponent } from './stock/stock.component';

const routes: Routes = [
  { path: "dashboard/calendar", component: CalendarComponent },
  { path: "dashboard/charts", component: ChartsComponent },
  { path: "dashboard/checkout", component: CheckoutComponent },
  { path: "dashboard/client", component: ClientComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "dashboard/invoice", component: InvoiceComponent },
  { path: "dashboard/quotation", component: QuotationComponent },
  { path: "dashboard/staff", component: StaffComponent },
  { path: "dashboard/stock", component: StockComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
