const express = require("express");
const serverConfig = require('./configs/server.config');
const mongoose = require('mongoose');
const dbConfig = require('./configs/db.config');
const userModel = require('./models/user.model')



const app = express();
/*
logic to connect to mongodb  and create an admin  user
\need to  have the mongodb up and running  in local machine
*/

app.use(express.json());

const dbConnect = require("./configs/db.config")
// mongoose.connect("dbConfig.DB_URL");
// const db = mongoose.connection;
dbConnect();



// db.on("error", () => {
//     console.log("Error while connecting  the database");

// })

// db.on("open", () => {
//     console.log("connected to database");

//     init();
// })

// async function init() {
//     /*initilize the mongo db
//     need to create a admin user
//     */

//     const admin = await userModel.create({
//         name: "Manish Singh",
//         userId: "admin",
//         email: "ms75444@gmail.com",
//         userType: "Admin",
//         password: "Welcome1"
//     });
//     console.log(admin);
// }

app.listen(serverConfig.PORT, (req,res) => {
    console.log(`Server Started at Port:${serverConfig.PORT}`);
})