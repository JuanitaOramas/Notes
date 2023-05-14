const mongoose = require('mongoose');
const MONGODB_URI = require('./config')



const connectDB = async () => {

    await mongoose
    .connect("mongodb+srv://admin:dm0TpuChZqUfJC43@cluster0.zkd1jcg.mongodb.net/?retryWrites=true&w=majority")
    .then(() => console.log("Connected to MongoDB Atlas"))
    .catch((error) => console.error(error));

}

module.exports=connectDB;


