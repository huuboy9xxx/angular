import { Component, Input, OnInit } from '@angular/core';

import { AuthService } from './services/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit{
  title = 'angular9-firebase';
  // listUser: any;
  public islogin: boolean = false;
  

  constructor (private afService: AuthService){ }

  ngOnInit(){
    if(this.afService.isLoggedIn){
      this.islogin = true;
      console.log(JSON.parse(localStorage.getItem('user'))); 
      console.log('van vao dc');
    }
    
  }

}
