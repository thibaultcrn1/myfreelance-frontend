import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToastService, AngularToastifyModule } from 'angular-toastify'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { JwtAuthorizationInterceptorsProvider } from './interceptors/jwt-authorization-interceptors/jwt-authorization-interceptors.service';
import { CookieService } from 'ngx-cookie-service';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    DashboardModule,
    RouterModule,
    AngularToastifyModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [
    ToastService, 
    CookieService,
    JwtAuthorizationInterceptorsProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
