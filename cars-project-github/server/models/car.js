const mongoose = require('mongoose')

const Schema = mongoose.Schema

const carSchema = new Schema({
    name: String,
    model: String,
    price: Number,
    image: String
})

const Car = mongoose.model('Car', carSchema)

module.exports = Car