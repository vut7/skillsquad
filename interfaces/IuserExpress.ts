import Mongoose = require("mongoose");
import { Iuser } from "./Iuser";

interface IuserExpress extends Iuser, Mongoose.Document {
}
export default IuserExpress;