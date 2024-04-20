import { Component, OnDestroy, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { Subscription } from 'rxjs';
import { Employee } from '../../../models/employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent implements OnInit, OnDestroy {

  constructor(private _employeeService: EmployeeService) { }
  private fetchRecordSubscription?: Subscription
  employeeList?: Employee[]

  ngOnDestroy(): void {
    this.fetchRecordSubscription?.unsubscribe()
  }

  ngOnInit(): void {
    this.fetchRecordSubscription = this._employeeService.getEmployee().subscribe({
      next: (response) => {
        this.employeeList = response
      },
      error: (e) => {
        console.log(e)
      }
    })
  }

}
