import Group from "./model";
import { Meetup } from "../meetups"
export const createGroup = async (req,res) => {
    const {
        name,
        description,
        category
    } = req.body;

    if(!name){
        return res.status(400).json({ error: true, message: "Name must be provided"});
    }else if(typeof name !== "string"){
        return res.status(400).json({ error: true, message: "Name must be String"})
    }else if(name.length < 5){
        return res.status(400).json({ error: true, message: "Name must atleast 5 character"})   
    }


    if(!description){
        return res.status(400).json({ error: true, message: "Description must be provided"});
    }else if(typeof description !== "string"){
        return res.status(400).json({ error: true, message: "Description must be String"})
    }else if(description.length < 10){
        return res.status(400).json({ error: true, message: "Description must atleast 10 character"})   
    }


    const group = new Group({ name, description});

    try{
        return res.status(201).json({ error: false, group: await group.save()})
    }catch(error){
        return res.status(400).json({ error: true, message: "Error from Group"})
    }


    


};

//create group meetup

export const createGroupMeetup = async (req,res) => {
    const {
        title,
        description
    } = req.body

    const { 
        groupId 
    } = req.params

    if(!title){
        return res.status(400).json({ error: true, message: "title must be provided"});
    }else if(typeof title !== "string"){
        return res.status(400).json({ error: true, message: "title must be String"})
    }else if(title.length < 5){
        return res.status(400).json({ error: true, message: "title must atleast 5 character"})   
    }


    if(!description){
        return res.status(400).json({ error: true, message: "Description must be provided"});
    }else if(typeof description !== "string"){
        return res.status(400).json({ error: true, message: "Description must be String"})
    }else if(description.length < 10){
        return res.status(400).json({ error: true, message: "Description must atleast 10 character"})   
    }

    if(!groupId){
        return res.status(400).json({ error: true, message: "please provide group id"})
    }

    try {
        const {meetup,group} = await Group.addMeetup(groupId,{title,description});

        return res.status(201).json({ error: false, meetup, group})
    } catch (error) {
        return res.status(400).json({ error: true, message: "error from groupMeetup"})
    }

};


export const getGroupMeetups = async (req,res) => {
    const { groupId } = req.params;

    if(!groupId){
        return res.status(400).json({ error: true, message: "GroupId not fund please provide one"});
    }

    //group exist or not

    const group = await Group.findById(groupId);

    if(!group){
        return res.status(400).json({ error: true, message: "Group not found"}); 
    }

    try {
        return res.status(200).json({ 
            error: false, 
            meetups: await Meetup.find({group: groupId}).populate("group","name")
        })
    } catch (error) {
        return res.status(400).json({ error: true, message: "error from fetching groupMeetups"}) ;
    }
};


