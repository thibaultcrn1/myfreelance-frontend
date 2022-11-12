import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/core/guards/auth.guard';

import { CalendarComponent } from './calendar/calendar.component';
import { ChartsComponent } from './charts/charts.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ClientComponent } from './client/client.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { QuotationComponent } from './quotation/quotation.component';
import { StaffComponent } from './staff/staff.component';
import { StockComponent } from './stock/stock.component';

const routes: Routes = [
  { path: "dashboard", component: DashboardComponent, canActivate: [AuthGuard] },
  { path: "dashboard/calendar", component: CalendarComponent, canActivate: [AuthGuard] },
  { path: "dashboard/charts", component: ChartsComponent, canActivate: [AuthGuard] },
  { path: "dashboard/checkout", component: CheckoutComponent, canActivate: [AuthGuard] },
  { path: "dashboard/client", component: ClientComponent, canActivate: [AuthGuard] },
  { path: "dashboard/invoice", component: InvoiceComponent, canActivate: [AuthGuard] },
  { path: "dashboard/quotation", component: QuotationComponent, canActivate: [AuthGuard] },
  { path: "dashboard/staff", component: StaffComponent, canActivate: [AuthGuard] },
  { path: "dashboard/stock", component: StockComponent, canActivate: [AuthGuard] } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
