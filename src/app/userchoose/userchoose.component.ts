import { Component, OnInit, Input } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-userchoose',
  templateUrl: './userchoose.component.html',
  styleUrls: ['../app.component.css'],
})

export class UserchooseComponent implements OnInit {
public userType;

  constructor() { }
  
  public setUserType(type:String){
    if(type == "instructor"){
      this.userType = "instructor";
      console.log(this.userType);
    } else {
      this.userType = "student";
      console.log(this.userType);
    }
  }

  ngOnInit() {
  }

}