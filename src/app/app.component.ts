import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {of} from 'rxjs';
import { Employee } from './employee';
import { EmployeeService } from './employee.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Table Employees';
  constructor(private employeeService: EmployeeService) { }
  employees: Employee[]=[];
  ngOnInit(): void {
    this.employeeService.getEmployees()
      .subscribe((data: Employee[]) => {
        this.employees = data;
      });
  }
}
