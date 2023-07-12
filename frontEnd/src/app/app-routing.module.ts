import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CandidatComponent } from './candidat/candidat.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './shared/auth.guard';
import { CompanyComponent } from './company/company.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  {path: 'candidat', component: CandidatComponent },
  {path:'signIn', component: SignInComponent},
  {path:'signUp', component: SignUpComponent},
  {path:'company-dashboard',component:CompanyComponent, canActivate: [AuthGuard] }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }