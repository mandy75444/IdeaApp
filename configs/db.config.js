const { default: mongoose } = require("mongoose")
// DB_URL: "mongodb://localhost:27017/idea_app_demo"
const DB_URL = 'mongodb://localhost:27017/newApp';


// module.exports = {
//     DB_NAME: "idea_app_demo",
//     DB_URL: "mongodb://localhost:27017/idea_app_demo"
// }

const dbConnect= () =>
     mongoose.connect(this.DB_URL).then( ()=>{
    console.log("Connected with DB")
} ).catch ( (error) =>{
    console.log("ERROR in db COnnection",error.message)
})

module.exports = dbConnect;