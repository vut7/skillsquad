"use strict";
exports.__esModule = true;
var DataAccess_1 = require("../DataAccess");
var mongoose = DataAccess_1["default"].mongooseInstance;
var mongooseConnection = DataAccess_1["default"].mongooseConnection;
var postModel = (function () {
    function postModel() {
        this.createSchema();
        this.createModel();
    }
    postModel.prototype.createSchema = function () {
        this.schema = mongoose.Schema({
            title: String,
            type: String,
            content: String,
            created: Date,
            username: String,
            comment: [String],
            likes: Number
        }, { collection: 'posts' });
    };
    postModel.prototype.createModel = function () {
        this.model = mongooseConnection.model("Post", this.schema);
    };
    postModel.prototype.retrieveAllPosts = function (response) {
        var query = this.model.find({});
        query.exec(function (err, itemArray) {
            response.json(itemArray);
        });
    };
    return postModel;
}());
exports["default"] = postModel;
