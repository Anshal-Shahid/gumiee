const express=require("express")
const router=express.Router()
const { walletAddressChecker,indexPage}=require("../controllers/index.controller.js")


router.get("/",indexPage)
router.post("/walletchecker",walletAddressChecker)

module.exports=router