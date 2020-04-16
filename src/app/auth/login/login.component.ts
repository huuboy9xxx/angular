import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private  authService:  AuthService, private router: Router){}

  ngOnInit(): void {
    if(this.authService.isLoggedIn){
      // var a = confirm('Bạn đã đăng nhập rồi! Bạn có muốn đăng xuất???');
      // if(a){
      //   this.authService.logout();
      //   return;
      // }
      this.router.navigate(["/admin"]);
      
    }
  }

  login(){
    // this.authService.login('huynoone@gmail.com', 'huy123455');
    this.authService.loginWithGoogle();
  }

  
}
