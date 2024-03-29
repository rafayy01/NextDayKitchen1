const mongoose = require("mongoose");



const ingredientsSchema = new mongoose.Schema({
    ingredientName: {
        type: String,
        required: true,
        unique: true
    },
    ingredientWeight: {
        type: String,
        required: true
    },
    ingredientCategory: {
        type: String,
        required: false
    }
});

module.exports = mongoose.model("ingredients",ingredientsSchema);