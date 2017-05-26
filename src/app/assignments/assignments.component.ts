import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

import { Ipost } from "../../../../../interfaces/Ipost";

@Component({
  selector: 'assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['../app.component.css']
})

export class AssignmentsComponent implements OnInit {
  postObjects: Ipost[] = [];
  public assignmentName;

  constructor(private data$:DataService) { 
  }

  ngOnInit() {
      this.data$.getPosts()
      .subscribe(result => {
        this.postObjects = result;
      });
  }
}








