const mongoose = require('mongoose');
const MONGODB_URI = require('./config')



const connectDB = async () => {

    await mongoose
    .connect(MONGODB_URI)
    .then(() => console.log("Connected to MongoDB Atlas"))
    .catch((error) => console.error(error));

}

module.exports=connectDB;


