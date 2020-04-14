import { Component, OnInit } from '@angular/core';

import { UserService } from '../../../services/user.service';
import { user } from '../../../model/user';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {

  user: user = new user();
  submitted = false;

  constructor(private userService: UserService) { }

  newUser(): void {
    this.submitted = false;
    this.user = new user();
  }
 
  save() {
    this.userService.createUser(this.user);
  }
 
  onSubmit() {
    this.submitted = true;
    this.save();
  }

}
