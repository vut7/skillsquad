"use strict";
exports.__esModule = true;
var express = require("express");
var logger = require("morgan");
var bodyParser = require("body-parser");
var postModel_1 = require("./model/postModel");
var userModel_1 = require("./model/userModel");
// Creates and configures an ExpressJS web server.
var App = (function () {
    //Run configuration methods on the Express instance.
    function App() {
        this.express = express();
        this.middleware();
        this.routes();
        this.Post = new postModel_1["default"]();
        this.User = new userModel_1["default"]();
    }
    // Configure Express middleware.
    App.prototype.middleware = function () {
        this.express.use(logger('dev'));
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
    };
    // Configure API endpoints.
    App.prototype.routes = function () {
        var _this = this;
        var router = express.Router();
        /*
            router.use( (req, res, next) => {
                res.header("Access-Control-Allow-Origin", "*");
                res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
                next();
            });
            */
        router.get('/app/posts', function (req, res) {
            console.log("Get request for all posts.");
            _this.Post.retrieveAllPosts(res);
        });
        router.post('/app/posts', function (req, res) {
            console.log("This is the request body: " + req.body);
            var jsonObj = {};
            jsonObj.title = req.body.title;
            console.log("This is the title: " + req.body.title);
            jsonObj.type = req.body.type;
            console.log("This is the type: " + req.body.type);
            jsonObj.content = req.body.content;
            console.log("This is the content: " + req.body.content);
            jsonObj.created = Date.now();
            console.log("This is the date created: " + req.body.created);
            jsonObj.username = req.body.username;
            console.log("This is the user: " + req.body.username);
            jsonObj.likes = 0;
            console.log("This is the num likes: " + req.body.likes);
            _this.Post.model.create([jsonObj], function (err) {
                if (err) {
                    console.log('object creation failed');
                }
            });
            res.send(jsonObj);
        });
        router.get('/app/users', function (req, res) {
            console.log("Get request for all users.");
            _this.User.retrieveAllUsers(res);
        });
        router.post('/app/users', function (req, res) {
            console.log("This is the request body: " + req.body);
            var jsonObj = {};
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
            _this.User.model.create([jsonObj], function (err) {
                if (err) {
                    console.log('object creation failed');
                }
            });
            res.send(jsonObj);
        });
        router.get('*', function (req, res) {
            res.sendFile(__dirname + '/dist/index.html');
        });
        this.express.use('/app/json/', express.static(__dirname + '/app/json'));
        this.express.use('/', express.static(__dirname + '/dist'));
        this.express.use('/', router);
        //this.express.use('/', express.static(__dirname+'/ssAngular/dist'));
        //this.express.use('/', express.static(__dirname+'/ssAngular/dist'));
        //this.express.use('/', express.static(__dirname+'/index.html'));
    };
    return App;
}());
exports["default"] = new App().express;
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
