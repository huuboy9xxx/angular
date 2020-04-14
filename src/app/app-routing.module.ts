import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateUserComponent } from './blocks/create-user/create-user.component';
import { ImageComponent } from './blocks/image/image.component';
import { HomeComponent } from './pages/home/home.component';

//user-manager
import { ListUserComponent } from './pages/user-manager/list-user/list-user.component';
import { AddUserComponent } from './pages/user-manager/add-user/add-user.component';
import { ProfileUserComponent } from './pages/user-manager/profile-user/profile-user.component';

const routes: Routes = [
  {path: "add", component: CreateUserComponent},
  // {path: "image", component: ImageComponent},
  //user manager
  {path: "users", component: ListUserComponent},
  {path: "add-user", component: AddUserComponent},
  {path: "profile", component: ProfileUserComponent},
  //home
  {path: "**", component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
