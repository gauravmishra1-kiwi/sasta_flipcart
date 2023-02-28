



require('dotenv').config()
const express=require("express")
const mongoose=require('mongoose')
const app=express()
const connection=require('./db/db');
const user_router=require('./routers/user_router')
// const Product=require('./routers/product_router')

const port = process.env.PORT 

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(user_router);

app.listen(port,()=>{
    console.log(`port listen at ${port}`);
})


