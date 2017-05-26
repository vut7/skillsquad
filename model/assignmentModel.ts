import Mongoose = require('mongoose');
import DataAccess from '../DataAccess';
import assignExpress from '../interfaces/assignExpress';

var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

export default class AssignModel{
    public schema:Mongoose.Schema;
    public model:any;

    public constructor() {
        this.createSchema();
        this.createModel();
    }

    public createSchema(): void {
        this.schema =  mongoose.Schema(
            {
                name: String, 
                description: String, 
                assignId: Number, 
                created: Date, 
                instructor: String
            }, {collection: 'assignments'}
        );
    }

    public createModel(): void {
        this.model = mongooseConnection.model<assignExpress>("Assignments", this.schema);
    }

    public retrieveAllAssignments(response:any): any {
        var query = this.model.find({});
        query.exec( (err, itemArray) => {
            response.json(itemArray) ;
        });
    }
}