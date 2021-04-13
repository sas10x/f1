import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formModel = {
    Email: '',
    Password: ''
  }
  constructor(private service: UserService, private router: Router, private toastr: ToastrService) { }

  ngOnInit() {
    if (localStorage.getItem('2Bqa') != null)
      this.router.navigateByUrl('/admin');
  }

  onSubmit(form: NgForm) {
    this.service.login(form.value).subscribe(
      (res: any) => {
        localStorage.setItem('2Bqa', res.token);
        this.router.navigateByUrl('/admin');
      },
      err => {
        if (err.status == 400)
          this.toastr.error('Incorrect email or password.', 'Authentication failed.');
        else
          console.log(err);
      }
    );
  }
}