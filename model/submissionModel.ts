import Mongoose = require('mongoose');
import DataAccess from '../DataAccess';
import subModel from '../interfaces/subModel';

var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

export default class SubmissionModel{
    public schema:Mongoose.Schema;
    public model:any;

    public constructor(){
        this.createSchema();
        this.createModel();
    } 

    public createSchema(): void{
        this.schema = mongoose.Schema(
            {
                name: String,
                description: String,
                content: String,
                submissionId: Number,
                created: Date,
                student: String
            }, {collection: 'submissions'}
        );
        
    }

    public createModel(): void {
        this.model = mongooseConnection.model<subModel>("Submissions", this.schema);
    }

    public retrieveAllSubmissions(response:any): any {
        var query = this.model.find({});
        query.exec((err, itemArray) => {
            response.json(itemArray);
        });
    }
}