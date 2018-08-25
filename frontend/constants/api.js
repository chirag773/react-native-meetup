import axios from "axios";

// export const fetchMeetups = () =>
//     fetch()
//         .then(response => response.json());

class MeetupApi{
    async fetchMeetups(){
        try {
            const { data } = await axios.get("http://192.168.0.103:3000/api/Meetup");
            return data.meetups;
        } catch (error) {
            console.log(error);
        }
    }

    async createMeetups(args){
        try {
            const response = await axios.post("http://192.168.0.103:3000/api/Meetup",{...args})
            return response
        } catch (error) {
            console.log(error);
        }
    }
}

export {MeetupApi}
            







