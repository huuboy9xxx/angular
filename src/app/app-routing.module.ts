import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateUserComponent } from './blocks/create-user/create-user.component';
import { ImageComponent } from './blocks/image/image.component';
import { HomeComponent } from './pages/home/home.component';

//user-manager
import { ListUserComponent } from './pages/user-manager/list-user/list-user.component';
import { AddUserComponent } from './pages/user-manager/add-user/add-user.component';
import { ProfileUserComponent } from './pages/user-manager/profile-user/profile-user.component';

//auth
import { LoginComponent } from './auth/login/login.component';
//pages
import { DashboardComponent } from './dashboard/dashboard.component';
import { SecurityAuthService } from './services/security-auth.service';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'admin', canActivate:[SecurityAuthService], children:[
      {path: '', component: DashboardComponent, children:[
        {path: '', canActivate:[SecurityAuthService], children:[
          {path: '', component: HomeComponent, outlet: "admin"}
        ]}
      ]},
      {path:"", component: DashboardComponent ,children:[
        {path: 'users', canActivate:[SecurityAuthService], children:[
          {path: '', component: ListUserComponent, outlet: "admin"}
        ]}
      ]},
      {path:"", component: DashboardComponent ,children:[
        {path: 'add-user', canActivate:[SecurityAuthService], children:[
          {path: '', component: AddUserComponent, outlet: "admin"}
        ]},
      ]},
      {path:"", component: DashboardComponent ,children:[
        {path: 'profile', canActivate:[SecurityAuthService], children:[
          {path: '', component: ProfileUserComponent, outlet: "admin"}
        ]}
      ]}
  ]},
  {path: '**', component: LoginComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
