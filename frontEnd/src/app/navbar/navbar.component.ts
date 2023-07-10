import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{
  isUserMenuOpen=false;
  username!:string | null ;
  firstLetter: string | null = null;
  constructor(private authservice:AuthService) {

  }
  ngOnInit(): void {
      this.username=localStorage.getItem('companyName');
      this.firstLetter = this.username ? this.username.charAt(0) : null;
      console.log(this.firstLetter);
      
  }
  IsloggedIn(){
    return this.authservice.IsLoggedIn();
  }

  logout(): void{
    localStorage.clear();
  }

}
