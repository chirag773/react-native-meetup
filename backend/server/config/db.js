import mongoose, { mongo } from "mongoose"

export default () => {
    mongoose.Promise = global.Promise;
    mongoose.connect("mongodb://localhost/meetupMe");
    mongoose.connection
        .once("open",()=> console.log("mongodb running"))
        .once("error",()=> console.log(error))
}