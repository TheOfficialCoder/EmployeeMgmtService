import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { EmployeeModule } from './employee/employee.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [AppComponent],
  bootstrap:[AppComponent],
  providers:[],
  imports: [
    CommonModule,BrowserModule,EmployeeModule,RouterModule
  ]
})
export class AppModule { }
