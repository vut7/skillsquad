import Mongoose = require("mongoose");
import { assignModel } from "./assignModel";

interface assignExpress extends assignModel, Mongoose.Document {
}
export default assignExpress;