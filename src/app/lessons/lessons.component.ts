import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

import { Ipost } from "../../../interfaces/Ipost";

@Component({
  selector: 'lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['../app.component.css']
})

export class LessonsComponent implements OnInit {
  postObjects:Ipost[] = [];

  constructor(private data$:DataService) { 

  }

    ngOnInit() {
      this.data$.getPosts()
      .subscribe(result => {
        this.postObjects = result;
      });
    }

}