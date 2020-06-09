import { Component, OnInit } from '@angular/core';
import { Validators, FormArray, FormBuilder } from '@angular/forms';
import { EmployeeService } from 'src/app/shared/services/employee.service';
import { EmployeeEffectsService } from 'src/app/shared/services/employee-effects.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-employee-status',
  templateUrl: './employee-status.component.html',
  styleUrls: ['./employee-status.component.css']
})
export class EmployeeStatusComponent implements OnInit{
  message: number;
  try: any[] = [];
  clicked: boolean = false;

  
  profileForm = this.fb.group({
    q1: ['', Validators.required],
    q2: ['', Validators.required],
    q3: ['', Validators.required],
    q4: ['', Validators.required],
    q5: ['', Validators.required],
    q6: ['', Validators.required],
    q7: ['', Validators.required],
    q8: ['', Validators.required],
    q9: ['', Validators.required],
    q10: ['', Validators.required]
  });

  

  constructor(private router: Router, private fb: FormBuilder, private employeeService: EmployeeService, private employeeEffects: EmployeeEffectsService) { }

  ngOnInit() {
    this.employeeService.currentMessage.subscribe(message => {this.message = message;console.log(this.message)})
  }
  onSubmit() {
    if (!this.clicked)
    {
      this.clicked = true;
      var a = {
        q : (this.profileForm.value).q1,
        Id : this.message,
        QId: 1
      };
      var b = {
        q : (this.profileForm.value).q2,
        Id : this.message,
        QId: 2
      };
      var c = {
        q : (this.profileForm.value).q3,
        Id : this.message,
        QId: 3
      };
      var d = {
        q : (this.profileForm.value).q4,
        Id : this.message,
        QId: 4
      };
      var e = {
        q : (this.profileForm.value).q5,
        Id : this.message,
        QId: 5
      };
      var f = {
        q : (this.profileForm.value).q6,
        Id : this.message,
        QId: 6
      };
      var g = {
        q : (this.profileForm.value).q7,
        Id : this.message,
        QId: 7
      };
      var h = {
        q : (this.profileForm.value).q8,
        Id : this.message,
        QId: 8
      };
      var i = {
        q : (this.profileForm.value).q9,
        Id : this.message,
        QId: 9
      };
      var j = {
        q : (this.profileForm.value).q10,
        Id : this.message,
        QId: 10
      };
     
      this.employeeEffects.addAnswer(a).subscribe(res => {
        console.log(res);
        this.employeeEffects.addAnswer(a).subscribe(res => {console.log(res);
          this.employeeEffects.addAnswer(b).subscribe(res => {console.log(res);
            this.employeeEffects.addAnswer(c).subscribe(res => {console.log(res);
              this.employeeEffects.addAnswer(d).subscribe(res => {console.log(res);
                this.employeeEffects.addAnswer(e).subscribe(res => {console.log(res);
                  this.employeeEffects.addAnswer(f).subscribe(res => {console.log(res);
                    this.employeeEffects.addAnswer(g).subscribe(res => {console.log(res);
                      this.employeeEffects.addAnswer(h).subscribe(res => {console.log(res);
                        this.employeeEffects.addAnswer(i).subscribe(res => {console.log(res);
                          this.employeeEffects.addAnswer(j).subscribe(res => {console.log(res)},
                          err => {
                            console.error('Observer got an error: ' + err);
                            this.router.navigateByUrl('/core/error');
                        },
                          () => {
                            console.log('Observer got a complete notification');
                            this.router.navigateByUrl('/core/success');
                        });
                        });
                      });
                    });
                  });
                });
              });
            });
          });
        });
      });
    }
  }
}
