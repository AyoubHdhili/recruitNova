import { Component } from '@angular/core';
import { AuthService } from './shared/service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Front_End';
  constructor(private authService: AuthService) {}
  isLoggedIn(): boolean {
    return this.authService.IsLoggedIn();
  }
}
