import express from "express";
import petRouter from "../routes/PetRouter";
import adopterRouter from "../routes/AdopterRouter";
import havenRouter from "../routes/HavenRouter";

const router = (app:express.Router)=>{
    app.use("/pets", petRouter)
    app.use("/adopters", adopterRouter); 
    app.use("/havens", havenRouter); 
};

export default router;