import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeService } from './employee.service';
import { HttpClientModule } from '@angular/common/http';
import { DepartmentListComponent } from './department-list/department-list.component';

@NgModule({
  declarations: [AppComponent, TestComponent, EmployeeListComponent, DepartmentListComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [EmployeeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
