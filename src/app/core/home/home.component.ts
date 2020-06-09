import {Component} from '@angular/core';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import { faCoffee, faCalendar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{
  faCalender = faCalendar;
  faCoffee = faCoffee;
  time = {hour: 13, minute: 30};
  meridian = true;
  model: NgbDateStruct;

  constructor() {
  }
    toggleMeridian() {
      this.meridian = !this.meridian;
  }
 
  
}
