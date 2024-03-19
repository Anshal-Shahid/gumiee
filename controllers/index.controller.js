const mongoose = require("mongoose")
const asyncHandler = require("express-async-handler")
const fs = require("fs")
const csv = require("csv-parser")
const Wallet = require("../models/walletAddress.model.js")
const { log } = require("console")


const csvFilePath = "./public/uploads/CSV.csv"
const data = []


// Controllers

const walletAddressChecker = asyncHandler(async (req, res) => {
    const fs = require('fs');
    const csv = require('csv-parser');
    const user_address = req.body.walletaddress   

    let walletAddresses = [];
    const csvFilePath = './public/uploads/CSV.csv';

    
    await fs.createReadStream(csvFilePath)
        .pipe(csv())
        .on('data', (row) => {
            // console.log(row["WALLET ADRESS"]);

            //   Wallet.create({
            //     walletAdrress: row["WALLET ADRESS"],
            //   })


            walletAddresses.push(row["WALLET ADRESS"])
        })
        .on('end', () => {
            
            console.log('CSV file has been processed.');

            
            if (walletAddresses.includes(user_address)) {
                res.status(200).json({
                    message: "User is in database",
                    response: true
                });
            } else {
                res.status(200).json({
                    message: "User is not in database",
                    response: false
                });
            }

            
        })
        .on('error', (err) => {
            console.error('Error occurred while reading the CSV file:', err);
        });


})



const indexPage = asyncHandler(async (req, res) => {

    res.render("index.ejs")

})


module.exports = { walletAddressChecker, indexPage }