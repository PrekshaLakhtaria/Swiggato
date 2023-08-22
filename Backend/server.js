const express = require("express");
const foodData = require("./models/foodModel");

const cors = require("cors");

const db = require("./db.js");

const app = express();

const foodRoute = require("../Backend/routes/foodRoute");
const userRoute = require("../Backend/routes/userRoute");

app.use(cors());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,POST,PATCH,PUT,DELETE,OPTIONS"
  );
  next();
});

app.use("/api/foods/", foodRoute);
app.use("/api/users/", userRoute);

app.get("/", (req, res) => {
  res.send("Server is working" + port);
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log("server litening"));
