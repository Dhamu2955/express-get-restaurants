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

app.use(express.json())
app.use(express.urlencoded())

app.post("/restaurants", async (request, response) => {
    const newRestaurant = await Restaurant.create(request.body)
    response.json(newRestaurant)
})

app.put("/restaurants/:id", async (request, response) => {
    const updateRestaurant = await Restaurant.update(
        request.body,
        {where: {id: request.params.id}})
})

app.delete("/restaurants/:id", async (request, response) => {
    const deletedRestaurant = await Restaurant.destroy({where: {id: request.params.id}})
})

module.exports = app;