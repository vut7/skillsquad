import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable";
import { Ipost } from '../../interfaces/Ipost';

@Injectable()
export class DataService {
  host:string = 'http://localhost:8080';

  constructor(private http: Http) { }

  //use this function to get all posts
  //used in homefeed, assignments, lessons, account
    getPosts(){
      return this.http.get(this.host + '/app/posts')
        .map(response => response.json());
    }

//used in homefeed
    createPost(postMake: Ipost): Observable<Ipost> {
    return this.http.post(this.host + '/app/posts', postMake)
      .map(res=> res.json());
    }

//used in account 
    getUsers(){
      return this.http.get(this.host + '/app/users')
      .map(response => response.json());
    }
}

























/*
  getAssignments(){
    return this.http.get(this.host + '/app/assignments')
    .map(response => response.json());
  }

getLessons(){
    return this.http.get(this.host + '/app/lessons')
    .map(response => response.json());
  }


  createAssignment(assignment: assignModel): Observable<assignModel> {
   return this.http.post(this.host + '/app/assignments', assignment)
    .map(res=> res.json());
  }
*/