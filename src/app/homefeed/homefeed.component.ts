import { NgModule, Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';
import { Ipost } from "../../../../../interfaces/Ipost";

//import { Ng2OrderModule } from 'ng2-order-pipe';

@Component({
  selector: 'app-homefeed',
  templateUrl: './homefeed.component.html',
  styleUrls: ['../app.component.css'],
})

export class HomefeedComponent implements OnInit {
  postObjects: Ipost[] = [];
  public postTitle;
  public show = false;
  public userType = 'instructor';

  constructor(private data$:DataService) { 

  }
  
    ngOnInit() {
      this.data$.getPosts()
      .subscribe(result => {
        this.postObjects = result;
      });

      console.log(this.userType);
    }

  public toggleShow(){
    this.show = !this.show;
  }

  public createPost(titleString: string, contentString: string, postType: string) {
    var now = new Date();
    var setUsername = 'lindyhopping';
    console.log(this.userType);

    console.log(setUsername);

    let postMake: Ipost = {
      username: setUsername,
      title: titleString,
      type: postType,
      content: contentString,
      created: new Date(now.getTime() + 24*60*60*1000),
      comment: [""],
      likes: 0,
    };

    this.data$.createPost(postMake).subscribe((response) => {
      this.postObjects.push(response);


    });

  }
}




























































    /*


                title: String,
                type: String,
                content: String,
                created: Date,
                user: String,
                comment: [String],
                likes: Number


      public createPost(inputString: String){
        let postMake: Ipost = {
          title: inputString
        };
      
      this.data$.createPost(postMake).subscribe((response) => ){
        this.postObjects.push(response);
      });
        
      }
*/



   // if(this.userType == 'instructor')
    //{
      //setUsername = 'lindyhopping';
    //} else {
     // setUsername = 'tuttybooty';
    //}