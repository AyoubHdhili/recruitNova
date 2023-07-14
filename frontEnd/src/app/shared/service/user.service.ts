import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { User } from '../model/user.model';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService implements OnInit{
  private usersSource: Subject<any> = new Subject<any>();

  currentUser = this.usersSource.asObservable();
  endPoint ='http://localhost:3000/api/user';
  constructor(private http: HttpClient) {
    
   }

   changeUsers(users:  User[]) {
    console.log('test 222');

    this.usersSource.next(users)
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
  getUsers(CompanyId:any):Observable<User[]>{
    return this.http.get<User[]>(`${this.endPoint}/users/${CompanyId}`);
  }
  deleteUser(id: any){
    return this.http.delete(`${this.endPoint}/${id}`);
  }

}
