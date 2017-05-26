import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Iuser } from "../../../../../interfaces/Iuser";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['../app.component.css']
})
export class AccountComponent implements OnInit {
  public userObjects: Iuser[] = [];

  constructor(private data$:DataService) { }

  ngOnInit() {
    this.data$.getUsers()
    .subscribe(result => {
      this.userObjects = result;
    });
  }
}
