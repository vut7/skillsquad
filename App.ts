import * as path from 'path';
import * as express from 'express';
import * as logger from 'morgan';
import * as url from 'url';
import * as bodyParser from 'body-parser';

import postModel from './model/postModel'; 
import userModel from './model/userModel'; 

import DataAccess from './DataAccess';

// Creates and configures an ExpressJS web server.
class App {

  // ref to Express instance
  public express: express.Application;
  public idGenerator:number;
    public Post:postModel;
    public User:userModel;

  //Run configuration methods on the Express instance.
  constructor() {
    this.express = express();
    this.middleware();
    this.routes();  
    this.Post = new postModel();
    this.User = new userModel();
}

  // Configure Express middleware.
  private middleware(): void {
    this.express.use(logger('dev'));
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: false }));
  }

  // Configure API endpoints.
  private routes(): void {
    let router = express.Router();

/*
    router.use( (req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });
    */
    
    router.get('/app/posts', (req, res) => {
        console.log("Get request for all posts.");
        this.Post.retrieveAllPosts(res);
    });

    router.post('/app/posts', (req, res) => {
        console.log(`This is the request body: ${req.body}`);
        var jsonObj: any = {};

        jsonObj.title = req.body.title;
        console.log(`This is the title: ${req.body.title}`);

        jsonObj.type = req.body.type;
        console.log(`This is the type: ${req.body.type}`);

        jsonObj.content = req.body.content;
        console.log(`This is the content: ${req.body.content}`);

        jsonObj.created = Date.now();
        console.log(`This is the date created: ${req.body.created}`);

        jsonObj.username = req.body.username;
        console.log(`This is the user: ${req.body.username}`);

        jsonObj.likes = 0;
        console.log(`This is the num likes: ${req.body.likes}`);

        this.Post.model.create([jsonObj], (err) => {
            if (err) {
                console.log('object creation failed');
            }
        });
        res.send(jsonObj);
    });

    router.get('/app/users', (req, res) => {
        console.log("Get request for all users.");
        this.User.retrieveAllUsers(res);
    });

    router.post('/app/users', (req, res) => {
        console.log(`This is the request body: ${req.body}`);
        var jsonObj: any = {};

        jsonObj.user_type = req.body.user_type;
        console.log('This is the user type: ${req.body.user_type}');

        jsonObj.first_name = req.body.first_name;
        console.log('This is the first name: ${req.body.first_name}');

        jsonObj.last_name = req.body.last_name;
        console.log('This is the last name: ${req.body.last_name}');

        jsonObj.content = req.body.email;
        console.log('This is the e-mail: ${req.body.email}');

        jsonObj.content = req.body.password;
        console.log('The password is a secret');

        jsonObj.content = req.body.class_code;
        console.log('The class code is: ${req.body.class_code}');

        jsonObj.created = Date.now();
        console.log('This is the date created: ${req.body.created}');

        jsonObj.username = req.body.username;
        console.log('This is the username: ${req.body.username}');

        this.User.model.create([jsonObj], (err) => {
            if (err) {
                console.log('object creation failed');
            }
        });
        res.send(jsonObj);
    });

    router.get('*', (req, res) =>{
        res.sendFile(__dirname+'/dist/index.html');
    });



    this.express.use('/app/json/', express.static(__dirname+'/app/json'));
    this.express.use('/', express.static(__dirname+'/dist'));
    this.express.use('/', router);

    //this.express.use('/', express.static(__dirname+'/ssAngular/dist'));
    //this.express.use('/', express.static(__dirname+'/ssAngular/dist'));
    //this.express.use('/', express.static(__dirname+'/index.html'));



  }

}

export default new App().express;




//editing rn
































/*
    router.post('/app/assignments', (req, res) => {
        console.log(req.body);

        var newAssignment = new AssignModel();
        newAssignment.name = req.body.name;
        newAssignment.assignId = this.idGenerator;
        newAssignment.date = Date.now();
        newAssignment.instructor = req.body.instructor;
        newAssignment.description = req.body.description;

        newAssignment.save(function(err, newAssignment){
            if(err){
                console.log("Error Saving video");
            } else {
                res.json(newAssignment);
            }
        });
 });
 */

        /*
        var jsonObj = req.body;
        jsonObj.assignId = this.idGenerator;
        this.Assignments.model.create([jsonObj], (err) => {
            if (err) {
                console.log('object creation failed');
            }
        });

        this.idGenerator++;
        */

   
    
        /*
        console.log(req.body);
        var jsonObj = req.body;
        jsonObj.assignId = this.idGenerator;
        this.Assignments.model.create([jsonObj], (err) => {
            if (err) {
                console.log('object creation failed');
            }
        });
        res.send(this.idGenerator.toString());
        this.idGenerator++;
*/

    /*
    router.get('/app/list/:listId/count', (req, res) => {
        var id = req.params.listId;
        console.log('Query single list with id: ' + id);
        //this.Tasks.retrieveTasksCount(res, {listId: id});
    });

    router.post('/app/list/', (req, res) => {
        console.log(req.body);
        var jsonObj = req.body;
        jsonObj.assignId = this.idGenerator;
        this.Assignments.model.create([jsonObj], (err) => {
            if (err) {
                console.log('object creation failed');
            }
        });
        res.send(this.idGenerator.toString());
        this.idGenerator++;
    });

    /*router.get('/app/list/:listId', (req, res) => {
        var id = req.params.listId;
        console.log('Query single list with id: ' + id);
        this.Assignments.retrieveTasksDetails(res, {listId: id});
    });*/

/*
    router.get('/app/list/', (req, res) => {
        console.log('Query All list');
        this.Assignments.retrieveAllLists(res);
    });
*/




/*
    router.post('/app/users', (req, res) => {
        console.log(`This is the request body: ${req.body}`);
        var jsonObj: any = {};

        jsonObj.user_type = req.body.user_type;
        console.log(`This is the user type: ${req.body.user_type}`);

        jsonObj.first_name = req.body.first_name;
        console.log(`This is the tyfirst name: ${req.body.first_name}`);

        jsonObj.content = req.body.content;
        console.log(`This is the content: ${req.body.content}`);

        jsonObj.created = Date.now();
        console.log(`This is the date created: ${req.body.created}`);

        jsonObj.user = req.body.user;
        console.log(`This is the user: ${req.body.user}`);

        jsonObj.likes = 0;
        console.log(`This is the num likes: ${req.body.likes}`);

        this.Post.model.create([jsonObj], (err) => {
            if (err) {
                console.log('object creation failed');
            }
        });
        res.send(jsonObj);
    });
*/

    /*
    router.get('/app/assignments', (req, res) => {
        console.log("Get request for all assignments.");
        this.Assignments.retrieveAllAssignments(res);
    });

router.post('/app/assignments', (req, res) => {
        console.log(`This is the request body: ${req.body}`);
        var jsonObj: any = {};

        jsonObj.assignId = this.idGenerator;
        jsonObj.created = Date.now();

        jsonObj.name = req.body.name;
        console.log(`This is the name: ${req.body.name}`);
        jsonObj.description = req.body.description;
        console.log(`This is the description: ${req.body.description}`);
        jsonObj.instructor = req.body.instructor;
        console.log(`This is the instructor: ${req.body.instructor}`);

        this.Assignments.model.create([jsonObj], (err) => {
            if (err) {
                console.log('object creation failed');
            }
        });
        res.send(jsonObj);
        this.idGenerator++;
    });
*/

/*
    router.get('/app/submissions', (req, res) => {
        console.log("Get request for all submissions.");
        this.Submissions.retrieveAllSubmissions(res);
    });

    router.post('/app/submissions', (req, res) => {
        console.log(req.body);
        var jsonObj = req.body;

        jsonObj.submissionId = this.idGenerator;
        jsonObj.created = Date.now();

        jsonObj.name = req.body.name;
        jsonObj.description = req.body.description;
        jsonObj.student = req.body.student;
        jsonObj.content = req.body.content;

        this.Submissions.model.create([jsonObj], (err) => {
            if (err) {
                console.log('object creation failed');
            }
        });
        res.send(jsonObj);
        this.idGenerator++;
    });




    router.get('/app/lessons', (req, res) => {
        console.log("Get request for all lessons.");
        this.Lessons.retrieveAllLessons(res);
    });

    router.post('/app/lessons', (req, res) => {
        console.log(req.body);
        var jsonObj = req.body;

        jsonObj.lessonId = this.idGenerator;
        jsonObj.created = Date.now();

        jsonObj.name = req.body.name;
        jsonObj.description = req.body.description;
        jsonObj.instructor = req.body.student;
        jsonObj.content = req.body.content;

        this.Lessons.model.create([jsonObj], (err) => {
            if (err) {
                console.log('object creation failed');
            }
        });
        res.send(jsonObj);
        this.idGenerator++;
    });
*/