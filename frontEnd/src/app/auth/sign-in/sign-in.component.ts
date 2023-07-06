import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/model/user.model';
import { AuthService } from '../../shared/service/auth.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  providers:[AuthService]
})
export class SignInComponent implements OnInit{
  user: User = new User();
  constructor(
    private authService:AuthService,
    private http:HttpClient,
    private router:Router){

  }

  ngOnInit(): void {
      
  }
  onSubmit():void {
    this.authService.SignIn(this.user).subscribe(()=>{
      this.router.navigate(['/']);
    })
  }
}
