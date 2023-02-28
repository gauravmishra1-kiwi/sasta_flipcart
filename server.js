require('dotenv').config();
const express=require('express');
const app= express();
const mongoose=require('mongoose')
const Userouter=require("./routers/user_router")

require('./db/db')

const port = process.env.PORT

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(Userouter)


app.listen(port,()=>{
    console.log(`port listen at ${port}`);
})