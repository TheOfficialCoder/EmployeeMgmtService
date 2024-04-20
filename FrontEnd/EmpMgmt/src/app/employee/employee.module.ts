import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeService } from './services/employee.service';
import { EMPLOYEE_URL, EMPLOYEE_URL_TOKEN } from '../constants/appconstants';
import { HttpClientModule } from '@angular/common/http';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { UpdateEmployeeComponent } from './components/update-employee/update-employee.component';
import { EmployeeDetailComponent } from './components/employee-detail/employee-detail.component';
import { Route, RouterModule, Routes } from '@angular/router';

const employeeRoutes: Routes = [
  {
    path: 'employee',
    children: [
      { path: '/all', component: EmployeeListComponent },
      { path: '/add', component: AddEmployeeComponent },
      { path: '/update', component: UpdateEmployeeComponent }
    ]
  }
]

@NgModule({
  declarations: [
    EmployeeListComponent,
    AddEmployeeComponent,
    UpdateEmployeeComponent,
    EmployeeDetailComponent
  ],
  imports: [
    CommonModule, HttpClientModule, RouterModule.forChild(employeeRoutes)
  ],
  providers: [
    {
      provide: EMPLOYEE_URL_TOKEN,
      useValue: EMPLOYEE_URL
    },
    EmployeeService
  ],
  exports: [EmployeeListComponent,RouterModule]
})
export class EmployeeModule { }
