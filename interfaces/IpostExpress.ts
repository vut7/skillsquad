import Mongoose = require("mongoose");
import { Ipost } from "./Ipost";

interface IpostExpress extends Ipost, Mongoose.Document {
}
export default IpostExpress;