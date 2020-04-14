import { Component, OnInit } from '@angular/core';

import { ImageService } from '../../../services/image.service';
import { Observable } from 'rxjs/internal/Observable';

import { UserService } from '../../../services/user.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
   
  listUser: any;
  showPercent = "block";

  //user form modal
  key: string = '';
  name: string = '';
  email: string = '';
  phone: string = '';
  age: Number = 0;
  address: string = '';
  password: string = '';
  level: Number = 0;
  status: Boolean = true;
  avatar: string = '';
  avatar_storage: string = '';

  //upload avatar
  uploadPercent: Observable<number>;
  urlImage: Observable<string> = null;
  statusUpload: number;
  
  //type Pass
  typepass = "password";

  constructor (private userService: UserService, private img: ImageService){ }

  //user control
  ngOnInit(): void {
    this.getListUser();
  }
  //delete a user
  deleteUser(key) {
    var confirm = prompt('Bạn chắc chắn muốn xóa người dùng này? Nhập "ok" để xác nhận!');
    if(confirm === "ok" || confirm === "OK"){
      this.userService.deleteUser(key).catch(err => console.log(err));
    }
    
  }
  //get data to view profile user
  viewUser(user){
    this.key = user.key;
    this.name = user.name;
    this.email = user.email;
    this.phone = user.phone;
    this.age = user.age;
    this.address = user.address;
    this.password = user.password;
    this.level = user.level;
    this.status = user.status;
    this.avatar = user.avatar;
    this.avatar_storage = user.avatar_storage;
    this.urlImage = null;
    
    this.typepass = "password";
  }
  //get list user from firebase
  getListUser() {
    this.userService.getUsersList().snapshotChanges().pipe(
          map(changes => changes.map(c =>({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(listUser => this.listUser = listUser);
  }
  //delete all user
  deleteAllUser() {
    var confirm = prompt('Bạn chắc chắn muốn xóa toàn bộ người dùng? Nhập "ok" để xác nhận!');
    if(confirm === "ok" || confirm === "OK"){
      this.userService.deleteAll().catch(err => console.log(err));
    }
  }
  //upload avatar
  uploadImage(e){
    if(!e.target.files[0].name){
      return;
    }
    this.showPercent = "block";
    if(this.avatar_storage){
      this.img.delete(this.avatar_storage);
    }
    this.avatar = null;
    const task = this.img.upload(e);
    this.uploadPercent = this.img.uploadPercent;
    this.urlImage = this.img.urlImage;

    this.uploadPercent.subscribe({
      error: err => console.log('error: ' + err),
      complete: () => setTimeout(() => {
        this.urlImage = this.img.urlImage;
        this.urlImage.subscribe({
          next: val => this.userService.updateUser(this.key, { avatar: val, avatar_storage : this.img.filePath})
          .catch(err => console.log(err))
        });
        this.avatar_storage = this.img.filePath;
        this.showPercent = "none";
      }, 2000)
    });
    
  }
  //show pass
  showPass(){
    this.typepass == "password"? this.typepass="text":this.typepass = "password";
  }

  //updata form
  upDataStatus(event){
    this.userService.updateUser(this.key, {status: event.target.value});
    this.status = event.target.value;
  }
  
  upDataLevel(event){
    this.userService.updateUser(this.key, {level: event.target.value});
    this.level = event.target.value;
  }

  upDataName(event){
    this.userService.updateUser(this.key, {name: event.target.value});
    this.name = event.target.value;
  }

  upDataEmail(event){
    this.userService.updateUser(this.key, {email: event.target.value});
    this.email = event.target.value;
  }

  upDataAge(event){
    this.userService.updateUser(this.key, {age: event.target.value});
    this.age = event.target.value;
  }

  upDataAdd(event){
    this.userService.updateUser(this.key, {address: event.target.value});
    this.address = event.target.value;
  }

  upDataPass(event){
    this.userService.updateUser(this.key, {password: event.target.value});
    this.password = event.target.value;
  }

  upDataPhone(event){
    this.userService.updateUser(this.key, {phone: event.target.value});
    this.phone = event.target.value;
  }

}
