import Mongoose = require('mongoose');
import DataAccess from '../DataAccess';
import lesModel from '../interfaces/lesModel';

var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

export default class LessonModel{
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
                lessonId: Number,
                created: Date,
                instructor: String,
                content: String
            }, {collection: 'lessons'}
        );
    }

    public createModel(): void {
        this.model = mongooseConnection.model<lesModel>("Lessons", this.schema);
    }

    public retrieveAllLessons(response:any): any {
        var query = this.model.find({});
        query.exec( (err, itemArray) => {
            response.json(itemArray) ;
        });
    }
}