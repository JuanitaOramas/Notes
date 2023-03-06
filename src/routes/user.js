const express = require("express");
const userSchema = require("../models/user");

const router = express.Router();


// create user
// localhost:9000/api/users
router.post('/users', (req, res) => {
    const user = userSchema(req.body); // cuerpo de la peticion
    user.save()
        .then((data) => res.json(data) ) // responde en formato json si sale todo bien 
        .catch ((error) => res.json({message: error}))  // sino  devuelve error
});


// get all users
router.get('/users', (req, res) => {
    userSchema
        .find()
        .then((data) => res.json(data)) // responde en formato json si sale todo bien 
        .catch ((error) => res.json({message: error}))  // sino  devuelve error
});

// get one specific user
router.get('/users/:id', (req, res) => {
    const {id} = req.params; // obtiene parametro id de la URL
    userSchema
        .findById(id)
        .then((data) => res.json(data)) 
        .catch ((error) => res.json({message: error})) 
});


// update a specific user
router.put('/users/:id', (req, res) => {
    const {id} = req.params; // obtiene parametro id de la URL
    const {name} = req.body;  // obtiene parametros name del cuerpo de la peticion
    userSchema
        .updateOne({ _id:id },{ $set: {name}})
        .then((data) => res.json(data)) 
        .catch ((error) => res.json({message: error})) 
});


router.delete('/users/:id', (req, res) => {
    const {id} = req.params; // obtiene parametro id de la URL
    userSchema
        .deleteOne({ _id:id })
        .then((data) => res.json(data)) 
        .catch ((error) => res.json({message: error})) 
});



module.exports = router;