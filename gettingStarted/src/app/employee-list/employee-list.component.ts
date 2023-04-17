import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { IEmployee } from '../employee';

@Component({
  selector: 'employee-list',
  template: `
    <h2>Employee List</h2>
    <p class="alert alert-danger">{{errorMsg}}</p>
    <ul *ngFor="let employee of employees">
      <li>{{ employee.id }}. {{ employee.name }} - {{ employee.age }}</li>
    </ul>

  `,
  styles: [],
})
export class EmployeeListComponent {
  public employees: IEmployee[] = [];
  public errorMsg = "";

  constructor(private _employeeService: EmployeeService) {}
  ngOnInit() {
  this._employeeService.getEmployees()
  .subscribe(
    data => this.employees = data,
    error => this.errorMsg = error
  )
  }
}
