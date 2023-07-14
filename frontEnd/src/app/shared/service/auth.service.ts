import { Injectable } from '@angular/core';
import { User } from '../model/user.model';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userNameSource = new BehaviorSubject<string>('default message');

  currentUserNAme = this.userNameSource.asObservable();
  endPoint ='http://localhost:3000/api/user';
  userName!: string;
  userNameSubject : Subject<string> = new Subject<string>();;
  
  constructor(private http: HttpClient) {
    
   }
   changeUsers(user:  string) {
    console.log('test 222');
    this.userNameSource.next(user)
  }
  ngOnInit(): void {

  }
  SignUp(user:User){
   return this.http.post(`${this.endPoint}/signUp`,{user});
   //return this.http.get(`${this.endPoint}/user`);
  }
  SignIn(user:User){    
    return this.http.post<{token:string,expiresIn: number,id: string,companyName: string ,email:string, role:string}>(`${this.endPoint}/signIn`, {user});
}
createHR(user:User){
  return this.http.post(`${this.endPoint}/create`,{user});
}
IsLoggedIn(){
  return !!localStorage.getItem('token');
}


}
