import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { StaffComponent } from './staff/staff.component';
import { StockComponent } from './stock/stock.component';

const routes: Routes = [
  { path: "dashboard/dashboard", component: DashboardComponent },
  { path: "dashboard/invoice", component: InvoiceComponent },
  { path: "dashboard/staff", component: StaffComponent },
  { path: "dashboard/stock", component: StockComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
