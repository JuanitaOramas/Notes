

// codigo del servidor
const express = require('express'); // importa express
// const mongoose = require('mongoose');
const connectDB = require("./db")


require("dotenv").config();


connectDB();

/////////////////////////////


const app = require("./app");
const port = process.env.PORT || 9001; // define puerto para correr
const httpServer = require("http").createServer(app);
const io = require("socket.io")(httpServer,{
    cors: {
        origin: "http://localhost:3001", // replace with your client URL
        methods: ["GET", "POST"]
      }
} );
const sockets = require("./sockets");
const cors = require('cors');


app.use(cors());


sockets(io);

//middleware
//localhost:9000/api
//app.use(express.json()); // transforma a un objeto js

 
httpServer.listen(port, () => console.log('server listening on port', port));