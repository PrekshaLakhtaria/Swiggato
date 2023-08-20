const mongoose = require('mongoose')

var mongoURL = "mongodb+srv://prekshalakhtaria:preksha1508@cluster0.iblncej.mongodb.net/Swiggato"

mongoose.connect(mongoURL,{useUnifiedTopology:true, useNewUrlParser:true})

var db = mongoose.connection

db.on('connected', ()=>{
    console.log("Mongo db connection successfull");
})

db.on('error', ()=>{
    console.log("Mongodb connection failed");
})

module.exports = mongoose