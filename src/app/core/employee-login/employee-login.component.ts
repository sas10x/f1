import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EmployeeEffectsService } from 'src/app/shared/services/employee-effects.service';
import { EmployeeService } from 'src/app/shared/services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-login',
  templateUrl: './employee-login.component.html',
  styleUrls: ['./employee-login.component.css']
})
export class EmployeeLoginComponent {
  message: number;
  change: number;
  profileForm = this.fb.group({
    idNumber: ['', Validators.required],
  });

  constructor(private router: Router, private fb: FormBuilder, private employeeEffects: EmployeeEffectsService, private employeeService: EmployeeService) { }

  ngOnInit() {
    this.employeeService.currentMessage.subscribe(message => {this.message = message;console.log(this.message)})
  }

  signIn() {
    console.log(this.profileForm.value);
    this.employeeEffects.getId(this.profileForm.value.idNumber).subscribe(
      x => { 
        this.change = x;
        console.log('Observer got a next value: ' + x);
        this.employeeService.changeMessage(x);
    },
      err => {
        console.error('Observer got an error: ' + err);
        this.router.navigateByUrl('/core/register');
    },
      () => {
        console.log('Observer got a complete notification');
        this.router.navigateByUrl('/core/health');
    }
    );
  }
}
