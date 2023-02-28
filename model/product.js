const mongoose=require('mongoose')

const product= new mongoose.Schema({
    name:{ type: String, required: true },
    id:{ type: Number, required: true },
    type:{ type: String, required: true },
},
{timestamp: true}
);

module.exports=mongoose.model("product",product);