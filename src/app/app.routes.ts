import { RouterModule, Routes } from '@angular/router';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthguardService } from './authguard.service';
import { AdminViewComponent } from './admin-view/admin-view.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthguardService] },
  { path: 'admin', component: AdminViewComponent, canActivate: [AuthguardService] },
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // Redirect to login for unknown paths
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthguardService, AuthService, Router] // Add these providers
})
export class AppRoutingModule { }