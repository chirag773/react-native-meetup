import { Router } from "express"
import * as GroupController from "./controller"

const routes = new Router();
// routes.get("/groups/new",GroupController.getMeetups);
routes.post("/groups/new",GroupController.createGroup);
routes.post("/groups/:groupId/meetups/new",GroupController.createGroupMeetup);

routes.get("/groups/:groupId/meetups",GroupController.getGroupMeetups);



export default routes; 