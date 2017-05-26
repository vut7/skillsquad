import Mongoose = require("mongoose");

interface lesModel extends Mongoose.Document {
    name: string,
    description: string,
    lessonId: number,
    created: Date,
    instructor: string,
    content: string
}

export default lesModel;