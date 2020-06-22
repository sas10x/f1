import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// const employeesUrl = "http://localhost:5000/api/employees";
const employeesUrl = "http://sas10x:5023/api/employees";

@Injectable({
  providedIn: 'root'
})
export class EmployeeEffectsService {

  constructor(private http: HttpClient) { }

  addEmployee(body) {
    return this.http.post<any>(employeesUrl, body);
  }
  getId(id) {
    return this.http.get<any>(employeesUrl + '/' + id);
  }
  addAnswer(body) {
    return this.http.post<any>(employeesUrl+ '/answer', body);
  }
}
