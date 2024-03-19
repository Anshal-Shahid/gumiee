// const express= require("express")
// const path=require("path");
// // const mongoose=require("mongoose")
// const ejs=require('ejs');
// const app=express();
// const templatePath=path.join(__dirname,"../templates");
 
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));  // middleware to parse the incoming requests with
// app.use(express.static(path.join(__dirname,"../public"))); 
 
// app.set("view engine", "ejs");
// app.set("views",templatePath);
 

//************************************************************************** */


const express = require("express")
const app = express()
const ejs = require("ejs")
const path = require("path")
const dotenv=require("dotenv")
dotenv.config()
const { errorHandler } = require("../middlewares/errorHandler.js")
const bodyParser=require("body-parser")
const {connectDB}=require("../configs/connectionDB.js")
const { log } = require("console")

connectDB()


// const mongooose =require("mongoose")


const templatePath = path.join(__dirname, "../tempelates")

app.set("view engine", "ejs")
app.set("views",templatePath)

// Middleware

app.use(express.json())
// app.use(express.urlencoded({ extended: false }))
app.use(bodyParser.urlencoded( { extended: true} ))
app.use(express.static(path.join(__dirname,"../public")));
app.use(errorHandler)


console.log(path.join(__dirname,"../public"));




//routes
app.use("/",require("../routers/index.routes.js"))



//port
const port=process.env.PORT||3000


app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})



   
