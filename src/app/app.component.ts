import { Component, Input, OnInit } from '@angular/core';

// import { UserService } from './services/user.service';
// import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angular9-firebase';
  // listUser: any;  

  // constructor (private userService: UserService){ }

  ngOnInit(){
    // this.getListUser();
  }

  // getListUser() {
  //   this.userService.getUsersList().snapshotChanges().pipe(
  //     map(changes =>
  //       changes.map(c =>
  //         ({ key: c.payload.key, ...c.payload.val() })
  //       )
  //     )
  //   ).subscribe(listUser => {
  //     this.listUser = listUser;
  //   });
  // }

  // deleteUsers() {
  //   this.userService.deleteAll().catch(err => console.log(err));
  // }

}
