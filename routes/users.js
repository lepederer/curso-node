const express = require("express");
const router = express.Router(); //*Extrae de express lo que nos ayudará a trabajar con las rutas

const {createUser, getUsers} = require("../controllers/users-contoller");

//* GET http://localhost:3000/api/users
router.get("/", getUsers); 

//* POST http://localhost:3000/api/users
router.post("/", createUser);

module.exports = router; 
