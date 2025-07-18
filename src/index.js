// require('dotenv').config()

import dotenv from "dotenv";
import mongoose from "mongoose";
import connectDB from "./db/index.js";
import express from "express";

dotenv.config({
  path: ".env",
});
const port = process.env.PORT;
const app = express();
app.use(express.json());

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  })
  .catch((err)=>{
    console.log("MONGO db connection failed !!!",err)
  });

  

/*
import express from "express"
const app = express()

( async()=>{
    try{
        mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

        app.on("error",()=>{
            console.log("Error",error);
            throw error
        })
        app.listen(process.env.PORT,()=>{
            console.log(`App is listening of port ${process.env.PORT}`);
        })
    }catch(error){
        console.error("ERROR:",error)
        throw err
    }
})

*/
