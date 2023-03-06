// codigo del servidor
const express = require('express'); // importa express
const mongoose = require('mongoose');
require("dotenv").config();
const userRoutes  = require('./routes/user');

const app = express();
const port = process.env.PORT || 9001; // define puerto para correr

//middleware
//localhost:9000/api
app.use(express.json()); // transforma a un objeto js
app.use('/api', userRoutes);



//routes

// localhost:9000
app.get('/', (req, res) => {
    res.send('Welcome to my API'); // responde con texto plano
});

mongoose
    .connect("mongodb+srv://admin:dm0TpuChZqUfJC43@cluster0.zkd1jcg.mongodb.net/?retryWrites=true&w=majority")
    .then(() => console.log("Connected to MongoDB Atlas"))
    .catch((error) => console.error(error));



app.listen(port, () => console.log('server listening on port', port));