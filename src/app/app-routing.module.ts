import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './user/login/login.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'core'
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'core',
    loadChildren: () => import('./core/core.module').then(m => m.CoreModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
