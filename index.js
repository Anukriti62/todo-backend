import express from "express";
import { connectDB } from "./db.connect.js";
const app=express();

// connect db

// register routes


const port=4002;
app.listen(port,()=>{
    console.log(`App is listening on port ${port}`);
});