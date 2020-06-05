const path = require('path');
const express = require('express');
const secret = require('./config/secret');
const router = express.Router();
const mongoose = require('mongoose')
const colors = require('colors');
const connectDB = require('./config/db');
const eventRoute = require('./routes/event');
const morgan = require("morgan");
const fileupload = require('express-fileupload')
const errorHandler = require('./middleware/error');





//invoke express
const app = express();

//Body parser
app.use(express.json());

//initialise file upload

//morgan
app.use(morgan('dev'));

app.use(fileupload());


// Set static folder
app.use(express.static(path.join(__dirname, 'public')));




////mount Routers
app.use('/events', eventRoute);

app.use(errorHandler);


//url encoder
app.use(express.urlencoded({ extended: false }));










//connecting to database
connectDB()


//port setting
const PORT = process.env.PORT || secret.port;
const server = app.listen(PORT, console.log(`server started on port ${PORT}`.yellow.bold));



//HANDLE ERROR
process.on('unhandledRejection', (err, promise) =>{
    console.log(`Error: ${err.message}`.red.bold);
    //close derver & exit process 
    server.close(() => process.exit(1));
  }
  );