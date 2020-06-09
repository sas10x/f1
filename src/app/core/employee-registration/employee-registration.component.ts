import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EmployeeEffectsService } from 'src/app/shared/services/employee-effects.service';
import { EmployeeService } from 'src/app/shared/services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-registration',
  templateUrl: './employee-registration.component.html',
  styleUrls: ['./employee-registration.component.css']
})
export class EmployeeRegistrationComponent {

  profileForm = this.fb.group({
    idNumber: ['', Validators.required],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    sex: ['', Validators.required],
    age: ['', Validators.required],
    street: ['', Validators.required],
    city: ['', Validators.required],
    province: ['', Validators.required],
  });

  

  constructor(private router: Router, private fb: FormBuilder, private employeeEffects: EmployeeEffectsService) { }

  onSubmit() {
    console.warn(this.profileForm.value);
    console.log(this.profileForm.value);
  }

  addEmployee() {
    console.log(this.profileForm.value);
    this.employeeEffects.addEmployee(this.profileForm.value)
    .subscribe(res => {
      console.log(res);
      if (res)
      {
        this.router.navigateByUrl('/core/login');
      }
    }
    )
  }
}
