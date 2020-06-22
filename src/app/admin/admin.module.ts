import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './admin.component';
import { MaterialModule } from '../shared/material/material.module';
import { RouterModule } from '@angular/router';
import { AdminRoutes } from './admin.routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [LoginComponent, RegisterComponent, DashboardComponent, AdminComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(AdminRoutes),
    FormsModule, 
    ReactiveFormsModule
  ]
})
export class AdminModule { }
