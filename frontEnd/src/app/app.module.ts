import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';  

import { AppComponent } from './app.component';
import { CandidatComponent } from './candidat/candidat.component';
import {FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CandidatService } from './shared/candidat.service';
import { NgForm } from '@angular/forms';
import { NgIf } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from'@angular/material/dialog';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { CompanyComponent } from './company/company.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MatListModule } from '@angular/material/list';
import { AddComponent } from './company/users/list/add/add.component';
import { ListComponent } from './company/users/list/list.component';


@NgModule({
  declarations: [
    AppComponent,
    CandidatComponent,
    SignInComponent,
    SignUpComponent,
    NavbarComponent,
    HomeComponent,
    CompanyComponent,
    SidebarComponent,
    AddComponent,
    ListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatSnackBarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,MatSidenavModule,
    NgIf,
    MatTabsModule,
    MatSlideToggleModule,
    MatListModule
    

  ],
  providers: [CandidatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
