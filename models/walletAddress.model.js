const mongoose=require("mongoose")

const walletAddress=new mongoose.Schema({
  walletAdrress:{
    type:String,
    unique:true,
    required:[true,"Please provide your Wallet Address"]
    
  }
    
})

module.exports=mongoose.model('Wallet',walletAddress)