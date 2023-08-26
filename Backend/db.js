const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: "./config/.env" });

var mongoURL = process.env.MONGODB_URL;

mongoose.connect(mongoURL, { useUnifiedTopology: true, useNewUrlParser: true });

var db = mongoose.connection;

db.on("connected", () => {
  // console.log("Mongo db connection successfull");
});

db.on("error", () => {
  // console.log("Mongodb connection failed");
});

module.exports = mongoose;
