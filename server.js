require('dotenv').config()
const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());

mongoose.connect( process.env.DATABASE_URL,{ useNewUrlParser : true});
const db = mongoose.connection

const subscribersRouter = require('./routes/subscribers')

app.use('/subscribers', subscribersRouter);

db.on('error', ()=> console.error(error));
db.once('open', ()=> console.log('Connected to database'))


app.listen(5000, ()=> console.log("Server listening to 5000"))