import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmployeeEffectsService } from './employee-effects.service';
import { BehaviorSubject } from 'rxjs';

const discountsUrl = "http://localhost:5000/api/discounts";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private messageSource = new BehaviorSubject(0);
  currentMessage = this.messageSource.asObservable();

  constructor(private employeeEffects: EmployeeEffectsService) { }

  addEmployee(body) {
    this.employeeEffects.addEmployee(body)
    .subscribe(res => console.log(res)
    )
  }

  changeMessage(message: number) {
    this.messageSource.next(message)
  }
}
