
const express=require("express");
const app=express();

//load config from env file
require("dotenv").config();

const PORT=process.env.PORT||4000;

//MiddleWare needed to pass json request body 

app.use(express.json());

//import routes for TODO API

const todoRoutes=require("./routes/toDoRoute");

//mount the todoRoute API

app.use("/api/v1",todoRoutes);


//start server

app.listen(PORT,()=>{
    console.log(`Server started at ${PORT}`);
});

//connect to the database;
const dbConnect=require("./config/database");
dbConnect();

//default Route

 app.get("/",(req,res)=>{
     res.send(`<h1>This is homepage body</h1`);
 })