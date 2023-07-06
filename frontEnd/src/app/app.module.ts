import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';  

import { AppComponent } from './app.component';
import { CandidatComponent } from './candidat/candidat.component';
import {FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CandidatService } from './shared/candidat.service';
import { NgForm } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
  declarations: [
    AppComponent,
    CandidatComponent,
    SignInComponent,
    SignUpComponent,
    NavbarComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSelectModule,
    

  ],
  providers: [CandidatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
