import Mongoose = require('mongoose');
import DataAccess from '../DataAccess';
import IpostExpress from '../interfaces/IpostExpress';

var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

export default class postModel{
    public schema:Mongoose.Schema;
    public model:any;

    public constructor() {
        this.createSchema();
        this.createModel();
    }

    public createSchema(): void {
        this.schema =  mongoose.Schema(
            {
                title: String,
                type: String,
                content: String,
                created: Date,
                username: String,
                comment: [String],
                likes: Number
            }, {collection: 'posts'}
        );
    }

    public createModel(): void {
        this.model = mongooseConnection.model<IpostExpress>("Post", this.schema);
    }

    public retrieveAllPosts(response:any): any {
        var query = this.model.find({});
        query.exec( (err, itemArray) => {
            response.json(itemArray) ;
        });
    }
}