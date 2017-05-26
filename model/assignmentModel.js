"use strict";
exports.__esModule = true;
var DataAccess_1 = require("../DataAccess");
var mongoose = DataAccess_1["default"].mongooseInstance;
var mongooseConnection = DataAccess_1["default"].mongooseConnection;
var AssignModel = (function () {
    function AssignModel() {
        this.createSchema();
        this.createModel();
    }
    AssignModel.prototype.createSchema = function () {
        this.schema = mongoose.Schema({
            name: String,
            description: String,
            assignId: Number,
            created: Date,
            instructor: String
        }, { collection: 'assignments' });
    };
    AssignModel.prototype.createModel = function () {
        this.model = mongooseConnection.model("Assignments", this.schema);
    };
    AssignModel.prototype.retrieveAllAssignments = function (response) {
        var query = this.model.find({});
        query.exec(function (err, itemArray) {
            response.json(itemArray);
        });
    };
    return AssignModel;
}());
exports["default"] = AssignModel;
