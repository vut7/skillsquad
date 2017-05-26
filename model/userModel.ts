import Mongoose = require('mongoose');
import DataAccess from '../DataAccess';
import IuserExpress from '../interfaces/IuserExpress';

var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

export default class userModel{
    public schema:Mongoose.Schema;
    public model:any;

    public constructor() {
        this.createSchema();
        this.createModel();
    }

    public createSchema(): void {
        this.schema =  mongoose.Schema(
            {
                user_type: String, 
                first_name: String, 
                last_name: String, 
                email: String, 
                password: String,
                class_code: Number, 
                created: Date,
                username: String
            }, {collection: 'users'}
        );
    }

    public createModel(): void {
        this.model = mongooseConnection.model<IuserExpress>("User", this.schema);
    }

    public retrieveAllUsers(response:any): any {
        var query = this.model.find({});
        query.exec( (err, itemArray) => {
            response.json(itemArray) ;
        });
    }
}