import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/service/auth.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isUserMenuOpen = false;
  message:string |null= null;
  firstLetter: string | null = null;

  constructor(private authService: AuthService) {
    
  }

  ngOnInit(): void {
    console.log(this.isUserMenuOpen);
    //this.newMessage();
    this.authService.currentUserName.subscribe((message) => {
      this.message = message
      console.log(message)
    })
  }

  isLoggedIn(): boolean {
    return this.authService.IsLoggedIn();
  }

  logout(): void {
    localStorage.clear();
  }
  newMessage() {
    
  }
}