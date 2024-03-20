
const express = require("express")
const app = express()
const ejs = require("ejs")
const path = require("path")
const dotenv=require("dotenv")
dotenv.config()
const { errorHandler } = require("../middlewares/errorHandler.js")
const bodyParser=require("body-parser")
const {connectDB}=require("../configs/connectionDB.js")
const cors=require("cors")

connectDB()

app.use(cors())



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



   
