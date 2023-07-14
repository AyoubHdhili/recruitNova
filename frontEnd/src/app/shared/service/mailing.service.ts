import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MailingService {
  endPoint ='http://localhost:3000/api/send-email';
  constructor(private http:HttpClient) { }
  sendMail(){
    this
  }
}
