const express = require("express");

const dotenv = require("dotenv");

const cors = require("cors");

const db = require("./db.js");

dotenv.config({ path: "./config/.env" });

const app = express();

const foodRoute = require("../Backend/routes/foodRoute");
const userRoute = require("../Backend/routes/userRoute");
const orderRoute = require("../Backend/routes/orderRoute");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api/foods/", foodRoute);
app.use("/api/users/", userRoute);
app.use("/api/orders/", orderRoute);

app.get("/", (req, res) => {
  res.send("Server is working" + port);
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log("server litening"));
