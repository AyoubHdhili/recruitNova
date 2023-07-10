import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/shared/service/auth.service';
import { User } from '../../shared/model/user.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  providers:[AuthService]
})
export class SignUpComponent implements OnInit{
  user: User = new User();
  selectedCity:string = '';
  selectedBusiness:string='';
  cities=[
    'Ariana',
    'Beja',
    'Ben Arous',
    'Bizerte',
    'Gabès',
    'Gafsa',
    'Jendouba',
    'Kairouan',
    'Kasserine',
    'Kebili',
    'Kef',
    'Mahdia',
    'Manouba',
    'Medenine',
    'Monastir',
    'Nabeul',
    'Sfax',
    'Sidi Bouzid',
    'Siliana',
    'Sousse',
    'Tataouine',
    'Touzeur',
    'Tunis',
    'Zaghouan'
  ];
  typesBusiness=[
    'Information Technology (IT)',
    'Biotechnology',
    'Renewable Energy',
    'Aerospace and Defense',
    'Healthcare and Pharmaceuticals',
    'Financial Services',
    'E-commerce',
    'Artificial Intelligence (AI)',
    'Internet of Things (IoT)',
    'Telecommunications',
    'Automotive',
    'Retail',
    'Manufacturing',
    'Logistics and Supply Chain',
    'Agroalimentaire'
  ];
  constructor(
    private authservice:  AuthService,
    private http:HttpClient,
    private router:Router,
    private snackBar:MatSnackBar) {
  
  }
  ngOnInit(): void {
      
  }
  onSubmit(): void{
    this.authservice.SignUp(this.user).subscribe((res)=>{
      this.router.navigate(['/signIn'])
      
    })
    this.snackBar.open('Your account has been succesfully created !!','',{
      duration:3000,
      verticalPosition:'top',
      panelClass:['my-snack-bar']
    })
    console.log(this.user);
    
  }
  openSnackBar(){

  }
}
