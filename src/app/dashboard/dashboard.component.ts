import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  
  private islogin: boolean;

  constructor (private afService: AuthService){ }

  ngOnInit(){
    if(this.afService.isLoggedIn){
      // this.islogin = true;
      // console.log(JSON.parse(localStorage.getItem('user')));
      console.log('dashboard');
    }
    
  }

  logout(){
    this.afService.logout();
  }

}
