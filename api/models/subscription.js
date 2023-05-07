const mongoose = require("mongoose");



const mealCategory = new mongoose.Schema({
  categoryName: {
      type: String,
      required: true,
      unique: false
  }
})

const subscriptionSchema = new mongoose.Schema({
  clientId: {
    type: Number,
    required: true,
  },
  targetProtien: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    required: true
  }
  ,categories: [mealCategory]
});

module.exports = mongoose.model("subscription", subscriptionSchema);
