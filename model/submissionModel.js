"use strict";
exports.__esModule = true;
var DataAccess_1 = require("../DataAccess");
var mongoose = DataAccess_1["default"].mongooseInstance;
var mongooseConnection = DataAccess_1["default"].mongooseConnection;
var SubmissionModel = (function () {
    function SubmissionModel() {
        this.createSchema();
        this.createModel();
    }
    SubmissionModel.prototype.createSchema = function () {
        this.schema = mongoose.Schema({
            name: String,
            description: String,
            content: String,
            submissionId: Number,
            created: Date,
            student: String
        }, { collection: 'submissions' });
    };
    SubmissionModel.prototype.createModel = function () {
        this.model = mongooseConnection.model("Submissions", this.schema);
    };
    SubmissionModel.prototype.retrieveAllSubmissions = function (response) {
        var query = this.model.find({});
        query.exec(function (err, itemArray) {
            response.json(itemArray);
        });
    };
    return SubmissionModel;
}());
exports["default"] = SubmissionModel;
