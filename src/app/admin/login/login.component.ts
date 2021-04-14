import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  error: boolean = false;
  formModel = {
    Email: '',
    Password: ''
  }
  constructor(private service: UserService, private router: Router) { }

  ngOnInit() {
    if (localStorage.getItem('2Bqa') != null)
      this.router.navigateByUrl('/core/login');
  }

  onSubmit(form: NgForm) {
    console.log('Kristan');
    this.service.login(form.value).subscribe(
      (res: any) => {
        localStorage.setItem('2Bqa', res.token);
        this.router.navigateByUrl('/core/login');
      },
      err => {
        if (err.status == 400)
          this.error = true;
        else
          console.log(err);
      }
    );
  }
  logOut() {
    localStorage.removeItem('2Bqa');
  }

}
