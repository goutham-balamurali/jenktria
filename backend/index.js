const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 4000;

const MONGO_URL = process.env.MONGO_URL||"mongodb://localhost:27017/todo";

mongoose.connect(MONGO_URL)
.then(()=>{console.log("connected")})
.catch((err)=>{console.error("not connected",err)})


app.get('/',(req,res)=>{
    res.send('app running');
})

app.listen(PORT, ()=>{

    console.log(`server running on ${PORT}`);
}
)