import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyComponent } from './company/company.component';
import { EmployeeComponent } from './employee/employee.component';
import { DetailComponent } from './detail/detail.component';
import { Detail2Component } from './detail2/detail2.component';

const routes: Routes = [{path:"company",component:CompanyComponent},
{path:"employee",component:EmployeeComponent},
{path:"employee/:id",component:DetailComponent},
{path:"company/:id",component:Detail2Component}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
