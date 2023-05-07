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

const MealModalType1 = new mongoose.Schema({
  mealCategory: {
    type: String,
    required: false,
  },
  mealName: {
    type: String,
    required: false,
  },
  mealDesciption: {
    type: String,
    required: false,
  },
  measurementUnit: {
    type: String,
    required: false,
  },
  mealDesciption: {
    type: String,
    required: false,
  },
  minServing: {
    type: String,
    required: false,
  },
  increment: {
    type: String,
    required: false,
  },
  maxserving: {
    type: String,
    required: false,
  },
  minservingCarbs: {
    type: String,
    required: false,
  },
  minservingfat: {
    type: String,
    required: false,
  },
  minservingprotein: {
    type: String,
    required: false,
  },
  carbs: {
    type: Array,
    required: false,
  },
  ingredients: [ingredientsSchema]
});

module.exports = mongoose.model("mealstype1", MealModalType1);
