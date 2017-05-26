import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import{ APP_BASE_HREF } from '@angular/common'

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AssignmentsComponent } from './assignments/assignments.component';
import { LessonsComponent } from './lessons/lessons.component';
import { AccountComponent } from './account/account.component';
import { HomefeedComponent } from './homefeed/homefeed.component';
import { LoginComponent } from './login/login.component';
import { UserchooseComponent } from './userchoose/userchoose.component';

import {AppRoute} from './app-route';
import {DataService} from './data.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AssignmentsComponent,
    LessonsComponent,
    AccountComponent,
    HomefeedComponent,
    LoginComponent,
    UserchooseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoute
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}, DataService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
