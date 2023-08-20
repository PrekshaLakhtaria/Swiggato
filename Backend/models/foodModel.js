const mongoose = require('mongoose');

const foodDataSchema = mongoose.Schema({
    name: {type: String, require},
    category : {type: String, require},
    img : {type: String, require},
    rating : {type: Number, require},
    price : {type: Number, require}
},{
    timestamps : true,
})

const foodDataModel = mongoose.model("fooddatas",foodDataSchema)




module.exports = foodDataModel