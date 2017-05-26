"use strict";
exports.__esModule = true;
var DataAccess_1 = require("../DataAccess");
var mongoose = DataAccess_1["default"].mongooseInstance;
var mongooseConnection = DataAccess_1["default"].mongooseConnection;
var LessonModel = (function () {
    function LessonModel() {
        this.createSchema();
        this.createModel();
    }
    LessonModel.prototype.createSchema = function () {
        this.schema = mongoose.Schema({
            name: String,
            description: String,
            lessonId: Number,
            created: Date,
            instructor: String,
            content: String
        }, { collection: 'lessons' });
    };
    LessonModel.prototype.createModel = function () {
        this.model = mongooseConnection.model("Lessons", this.schema);
    };
    LessonModel.prototype.retrieveAllLessons = function (response) {
        var query = this.model.find({});
        query.exec(function (err, itemArray) {
            response.json(itemArray);
        });
    };
    return LessonModel;
}());
exports["default"] = LessonModel;
