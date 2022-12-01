import { Component, OnInit } from '@angular/core';
import {enableProdMode} from '@angular/core';

enableProdMode();
import { TokenStorageService } from 'src/app/shared/services/token-storage.service';
import { User } from 'src/app/shared/services/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  currentUser: User = new User;

  constructor(private token: TokenStorageService) { }

  ngOnInit(): void {
    this.currentUser = this.token.getUser()
    console.log(localStorage.getItem("id"));
    console.log(this.token.getUser);

  }
}