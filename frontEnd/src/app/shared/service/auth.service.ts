import { Injectable } from '@angular/core';
import { User } from '../model/user.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
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
    console.log({user});
    
    return this.http.post(`${this.endPoint}/signIn`, {user}, {withCredentials: true});
}
}
