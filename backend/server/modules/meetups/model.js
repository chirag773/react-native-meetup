import mongoose,{ Schema } from "mongoose"



const MeetupSchema = new Schema({
    title:{
        type:String,
        required:true,
        minlength:[5, "Meetup title Must Be Atleast 5 Character" ]
    },
    description:{
        type:String,
        required:true,
        minlength:[10, "Meetup description Must Be Atleast 10 Character" ] 
    },
    group:{
        type:Schema.Types.ObjectId,
        ref:"Group"
    }
},{ timestamps:true });

export default mongoose.model("Meetup",MeetupSchema)