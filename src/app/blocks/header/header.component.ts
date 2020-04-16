import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/services/auth.service';
import { user } from 'src/app/model/user';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  constructor(private authSV: AuthService) { }

  // private user:user = new user;

  ngOnInit(): void {
    if(this.authSV.isLoggedIn){
      // console.log(JSON.parse(localStorage.getItem('user')));
      // this.user.name = 
      // this.user = JSON.parse(localStorage.getItem('user'));
    }
  }

  logout(){
    this.authSV.logout();
  }

}
