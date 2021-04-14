import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private router: Router) {}
  title = 'bayanihan';
  isLoggedIn: boolean = false;

  ngOnInit() {
    if (localStorage.getItem('2Bqa') != null)
    {

    }
  }
  logOut() {
    localStorage.removeItem('2Bqa');
    this.router.navigateByUrl('/admin/login');
  }
}
