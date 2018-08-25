import Meetup from "./model"


//====post routes of meetups

export const createMeetup = async (req,res)=>{
    const { 
        title, 
        description 
    } = req.body;
    const meetup = new Meetup({
        title,
        description
    });


    //try,catch

    try{
        return res.status(201).json({ meetup : await meetup.save()})
    } catch(error){
        return res.status(error.status).json({error:true,message:"Error pleassssseeeee check"})
    }
}



//====get routes of meetups

export const getMeetups = async (req,res)=>{


    //try,catch

    try{
        return res.status(200).json({ meetups : await Meetup.find({})})
    } catch(error){
        return res.status(error.status).json({error:true,message:"Error pleassssseeeee check"})
    }
}

