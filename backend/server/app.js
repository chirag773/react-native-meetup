import express from "express";
import dbConfig from "./config/db"
import middlewareConfig from "./config/middlewares";
import { MeetupRoutes, GroupRoutes } from "./modules"


const app = express()

// DATABSE CONFIG

dbConfig();


// MIDDLEWARE CONIG 

middlewareConfig(app);

app.use("/api",[MeetupRoutes,GroupRoutes])


const PORT = process.env.PORT || 3000


app.listen(PORT,err=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("======server has started on PORT 3000 =========")
    }
})