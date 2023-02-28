const constant= require('../constant/constants')
const mongoose=require("mongoose");
mongoose.set("strictQuery",true)
mongoose.connect("mongodb+srv://gaurav:Gaurav12@cluster0.o6zgubf.mongodb.net/Sasta_Flipcart",{
    // useCreateIndex:true,
     useNewUrlParser:true,
    // useUnifiedTopology:true
}).then(()=>{ 
    console.log(constant.CONNECTED_CORRETLY);
}).catch((e)=>{
    console.log(constant.CONNECTED_INCORRETLY);
})         
