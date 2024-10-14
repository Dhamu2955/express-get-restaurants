const express = require("express");
const app = express();
const Restaurant = require("../models/index")
const db = require("../db/connection");

//TODO: Create your GET Request Route Below: 

app.get("/restaurants", async (request, response) =>{
    const data = await Restaurant.findAll()
    response.json(data)
})

app.get("/restaurants/:id", async (request, response) => {
    const restaurantId = request.params.id
    const restaurant = await Restaurant.findByPk(restaurantId)
    response.json(restaurant)

})

module.exports = app;