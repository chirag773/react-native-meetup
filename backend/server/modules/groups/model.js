import mongoose,{ Schema } from "mongoose"



const GroupSchema = new Schema({
    name:{
        type:String,
        required:true,
        minlength:[5, "Group Name Must Be Atleast 5 Character" ]
    },
    description:{
        type:String,
        required:true,
        minlength:[10, "Group Description Must Be Atleast 10 Character" ]
    },
    category:{
        type:String
    },
    meetups:[
        {
        type:Schema.Types.ObjectId,
        ref:"Meetup"
    }
]
},{ timestamps:true });


GroupSchema.statics.addMeetup = async function (id,args){
    const Meetup = mongoose.model("Meetup");

    const meetup = await new Meetup({ ...args, group:id});

    const group = await this.findByIdAndUpdate(id,{ $push:{ meetups:meetup.id}});

    return {
        meetup: await meetup.save(),
        group
    }
};

export default mongoose.model("Group",GroupSchema)