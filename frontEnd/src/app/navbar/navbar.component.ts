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

  firstLetter: string | null = null;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    console.log("test");
    console.log(this.isUserMenuOpen);

    this.authService.getVariableObservable().subscribe((newValue: string) => {
      console.log('ahmeddddd');

      this.firstLetter = newValue.charAt(0);
    });
  }

  isLoggedIn(): boolean {
    return this.authService.IsLoggedIn();
  }

  logout(): void {
    localStorage.clear();
  }
}