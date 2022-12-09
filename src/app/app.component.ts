
import { Component } from '@angular/core';

import { TokenStorageService } from './shared/services/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username?: string;
  email?: string;
  first_name?: string;
  last_name?: string;
  role?: string;
  

  constructor(private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.username = user.username;
      this.email = user.email;
      this.first_name = user.first_name;
      this.last_name = user.last_name;
      this.role = user.role;

    }
  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}
