import Mongoose = require('mongoose');

interface subModel extends Mongoose.Document {
    name: string,
    description: string,
    content: string,
    submissionId: number,
    created: Date,
    student: string
}

export default subModel;