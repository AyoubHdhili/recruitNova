import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/model/user.model';
import { AuthService } from '../../shared/service/auth.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Token } from '@angular/compiler';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  providers:[AuthService]
})
export class SignInComponent implements OnInit{
  user: User = new User();
  email:string ='';
  password:string='';
  firstLetter: string | null = null;
  constructor(
    private authService:AuthService,
    private http:HttpClient,
    private router:Router,
    private snackBar: MatSnackBar){

  }

  ngOnInit(): void {
      
  }
  onSubmit():void {
    this.authService.SignIn(this.user).subscribe((res)=>{
      this.router.navigate(['/company-dashboard']);
      localStorage.setItem('token',res.token);
      localStorage.setItem('expiresIn',String(res.expiresIn));
      localStorage.setItem('companyName',res.companyName);
      localStorage.setItem('email',res.email);
      localStorage.setItem('role',res.role);
      localStorage.setItem('CompanyId',res.id);
      
    },() =>{
      this.snackBar.open('Incorrect email or password','',{
        duration:3000,
        verticalPosition:'top',
        panelClass:['my-snack-bar'],
      })
    })
  }

}
