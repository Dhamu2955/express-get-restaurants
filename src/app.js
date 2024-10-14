const express = require("express");
const app = express();
const Restaurant = require("../models/index")
const db = require("../db/connection");

//TODO: Create your GET Request Route Below: 

app.get("/restaurants", async (request, response) =>{
    const data = await Restaurant.findAll()
    response.json(data)
})


module.exports = app;