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
// const { urlencoded } = require("body-parser")
// const cookieParser = require("cookie-parser")
// const db = require("./mongodb")
const { log } = require("console")

// const mongooose =require("mongoose")


const templatePath = path.join(__dirname, "../tempelates")


// Middleware
app.use(express.json())
// app.use(cookieParser())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname,"../public")));

console.log(path.join(__dirname,"../public"));


app.set("view engine", "ejs")
app.set("views",templatePath)



app.get("/",(req,res)=>{
    
    res.render("index") 


})



app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})



   
