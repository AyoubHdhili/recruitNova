import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/service/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit{

  isUserMenuOpen = false;
  collapseShow = "hidden";

  firstLetter: string | null = null;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    console.log("test");
    console.log(this.isUserMenuOpen);
  }

  logout(): void {
    localStorage.clear();
  }

}
