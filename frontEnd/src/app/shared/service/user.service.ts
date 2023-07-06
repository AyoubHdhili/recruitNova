import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService implements OnInit{
  endPoint ='http://localhost:3000/api/user';
  constructor(private http: HttpClient) {
    
   }
  ngOnInit(): void {

  }
  SignUp(user:User){
   return this.http.post(`${this.endPoint}/signUp`,{user});
   //return this.http.get(`${this.endPoint}/user`);
  }
  SignIn(user:User){
    return this.http.post(`${this.endPoint}/signIn`, {user}, {withCredentials: true});
  }

}
