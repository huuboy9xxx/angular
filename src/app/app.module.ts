import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireStorageModule } from '@angular/fire/storage';

import { environment } from 'src/environments/environment';
import { FormsModule } from '@angular/forms';
import { DetailsUserComponent } from './blocks/details-user/details-user.component';
import { CreateUserComponent } from './blocks/create-user/create-user.component';
import { ImageComponent } from './blocks/image/image.component';

//chartist

import { HighchartsChartModule } from "highcharts-angular";

//blocks
import { HeaderComponent } from './blocks/header/header.component';
import { FooterComponent } from './blocks/footer/footer.component';
import { LeftPanelComponent } from './blocks/left-panel/left-panel.component';
import { HomeComponent } from './pages/home/home.component';
//Auth
import { AngularFireAuthModule } from '@angular/fire/auth'
//user manager
import { ListUserComponent } from './pages/user-manager/list-user/list-user.component';
import { AddUserComponent } from './pages/user-manager/add-user/add-user.component';
import { ProfileUserComponent } from './pages/user-manager/profile-user/profile-user.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';

//security
import { AuthService } from './services/auth.service';
import { SecurityAuthService } from './services/security-auth.service';

@NgModule({
  declarations: [
    AppComponent,
    DetailsUserComponent,
    CreateUserComponent,
    ImageComponent,
    HeaderComponent,
    FooterComponent,
    LeftPanelComponent,
    HomeComponent,
    ListUserComponent,
    AddUserComponent,
    ProfileUserComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    FormsModule,
    HighchartsChartModule
  ],
  providers: [
    AuthService,
    SecurityAuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
