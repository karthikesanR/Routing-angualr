import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { CompanyComponent } from './company/company.component';
import{HttpClientModule}from '@angular/common/http';
import { DetailComponent } from './detail/detail.component';
import { FormsModule } from '@angular/forms';
import { Detail2Component } from './detail2/detail2.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    CompanyComponent,
    DetailComponent,
    Detail2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
