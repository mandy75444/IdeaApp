const express = require("express");
const serverConfig = require('./configs/server.config')
const mongoose = require('mongoose')
const dbConfig = require('./configs/db.config')



const app = express();
/*
logic to connect to mongodb  and create an admin  user
\need to  have the mongodb up and running  in local machine
*/
mongoose.connect("dbConfig.DB_URL");
const db = mongoose.connection;

db.on("error",()=>{
    console.log("Error while connecting  the database");

})

db.on("open",()=>{
    console.log("connected to database");
    
})

app.listen(serverConfig.PORT, () => {
    console.log(`Server Started at Port:${serverConfig.PORT}`);
})