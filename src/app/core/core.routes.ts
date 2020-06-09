import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EmployeeStatusComponent } from './employee-status/employee-status.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { EmployeeRegistrationComponent } from './employee-registration/employee-registration.component';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';
import { EmployeeSuccessComponent } from './employee-success/employee-success.component';
import { EmployeeErrorComponent } from './employee-error/employee-error.component';


export const CoreRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'health',
    component: EmployeeStatusComponent
  },
  {
    path: 'profile',
    component: ProfileEditorComponent
  },
  {
    path: 'register',
    component: EmployeeRegistrationComponent
  },
  {
    path: 'login',
    component: EmployeeLoginComponent
  },
  {
    path: 'success',
    component: EmployeeSuccessComponent
  },
  {
    path: 'error',
    component: EmployeeErrorComponent
  }
];