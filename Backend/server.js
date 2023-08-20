const express = require("express")

const foodData = require('./models/foodModel')

const db = require('./db.js')

const app = express()

const foodRoute = require('../Backend/routes/foodRoute')

app.use('/api/foods', foodRoute)



app.get('/',(req,res)=>{
    res.send("Server is working"+port)
})

// app.get("/getfoods", async (req, res) => {
//     try {
//       const docs = await foodData.find();
//       console.log(docs);
//       res.send(docs);
//     } catch (err) {
//       console.log(err);
//     }
//   });


const port = process.env.PORT || 5000;



app.listen(port, () => 
console.log('server litening'))