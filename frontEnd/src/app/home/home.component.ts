import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  name!:string | null ;
  role!:string |null;
  constructor(){

  }
  ngOnInit(): void {
    this.name=localStorage.getItem("companyName");
    this.role=localStorage.getItem("role");
  }
}
