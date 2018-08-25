import { Router } from "express"
import * as MeetupController from "./controller"

const routes = new Router();
routes.get("/Meetup",MeetupController.getMeetups);
routes.post("/Meetup",MeetupController.createMeetup);



export default routes;