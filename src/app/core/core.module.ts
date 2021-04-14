import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { CoreRoutes } from './core.routes';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EmployeeStatusComponent } from './employee-status/employee-status.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { EmployeeRegistrationComponent } from './employee-registration/employee-registration.component';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';
import { EmployeeErrorComponent } from './employee-error/employee-error.component';
import { EmployeeSuccessComponent } from './employee-success/employee-success.component';
import { BulkAddComponent } from './bulk-add/bulk-add.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzSpinModule } from 'ng-zorro-antd/spin';




@NgModule({
  declarations: [HomeComponent, EmployeeStatusComponent, ProfileEditorComponent, EmployeeRegistrationComponent, EmployeeLoginComponent, EmployeeErrorComponent, EmployeeSuccessComponent, BulkAddComponent],
  imports: [CommonModule, RouterModule.forChild(CoreRoutes), NgbModule, FormsModule, ReactiveFormsModule, FontAwesomeModule, HttpClientModule, NzTableModule, NzSpinModule],
  exports: [HomeComponent],
  bootstrap: [HomeComponent]
})
export class CoreModule { }

