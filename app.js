const express = require('express');
const mongoose = require('mongoose');
mongoose.set('strictQuery', true)
require("dotenv/config")
const app = express();
//using middlewares
app.use(express.json())



//setting up routes
app.get('/home',(req,res)=>{
    res.send('Welcome to home page')
})
//Step 4 adding user request to database
const createRoute = require('./routes/create')
app.use('/create',createRoute);
const updateRoute = require('./routes/update')
app.use('/update',updateRoute);

mongoose.connect(
    process.env.DB_CONNECTION, 
    ()=>{console.log("Connected to database")}
    )

app.listen(3000, ()=>{console.log("Server is listening on port 3000")})