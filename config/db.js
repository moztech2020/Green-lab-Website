const mongoose = require('mongoose');
//connecting to mongodb
db ="mongodb://localhost/Greenlab"
const connectDB = async () => {
    const conn = await mongoose.connect(db, {
      useUnifiedTopology: true, 
      useNewUrlParser: true,
      useCreateIndex: true
    })
    .then(() => console.log("Mongodb connected:........."))
    .catch(err => console.log(err));

}

module.exports = connectDB

     
  
  
  