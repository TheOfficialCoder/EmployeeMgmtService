import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeService } from './services/employee.service';
import { EMPLOYEE_URL, EMPLOYEE_URL_TOKEN } from '../constants/appconstants';
import { HttpClientModule } from '@angular/common/http';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { UpdateEmployeeComponent } from './components/update-employee/update-employee.component';
import { EmployeeDetailComponent } from './components/employee-detail/employee-detail.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    EmployeeListComponent,
    AddEmployeeComponent,
    UpdateEmployeeComponent,
    EmployeeDetailComponent
  ],
  imports: [
    CommonModule, HttpClientModule,
  ],
  providers: [
    {
      provide: EMPLOYEE_URL_TOKEN,
      useValue: EMPLOYEE_URL
    },
    EmployeeService
  ],
  exports: [EmployeeListComponent, RouterModule]
})
export class EmployeeModule { }
