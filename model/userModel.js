"use strict";
exports.__esModule = true;
var DataAccess_1 = require("../DataAccess");
var mongoose = DataAccess_1["default"].mongooseInstance;
var mongooseConnection = DataAccess_1["default"].mongooseConnection;
var userModel = (function () {
    function userModel() {
        this.createSchema();
        this.createModel();
    }
    userModel.prototype.createSchema = function () {
        this.schema = mongoose.Schema({
            user_type: String,
            first_name: String,
            last_name: String,
            email: String,
            password: String,
            class_code: Number,
            created: Date,
            username: String
        }, { collection: 'users' });
    };
    userModel.prototype.createModel = function () {
        this.model = mongooseConnection.model("User", this.schema);
    };
    userModel.prototype.retrieveAllUsers = function (response) {
        var query = this.model.find({});
        query.exec(function (err, itemArray) {
            response.json(itemArray);
        });
    };
    return userModel;
}());
exports["default"] = userModel;
