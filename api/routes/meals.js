const router = require("express").Router();
const Meal = require("../models/meal");

router.post("/addMeal", async (req, res) => {
  const {
    mealCategory,
    mealName,
    mealDesciption,
    measurementUnit,
    minServing,
    increment,
    maxserving,
    minservingCarbs,
    minservingfat,
    minservingprotein,
    carbs,
  } = req.body;

  try {
    const PreMeal = await Meal.findOne({ mealName: mealName });
    if (PreMeal) {
      res.status(422).send({ error: "The meal name is taken!" });
    } else {
      const addmeal = new Meal(req.body);
      await addmeal.save();
      res.status(201).json(addmeal);
    }
  } catch (error) {
    res.status(422).json({ error: error });
  }
});

// delete user
router.delete("/deleteMeal/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const deletmeal = await Meal.findByIdAndDelete({ _id: id });
    console.log(id);
    if (deletmeal) {
      res.status(201).json("Delete Meal Successfully");
    } else {
      res.status(402).send({ error: "ID Can't be found" });
    }
  } catch (error) {
    res.status(422).send({ error: "can't find id" });
  }
});

// get Alluserlist

router.get("/getMeal/All", async (req, res) => {
  try {
    const mealList = await Meal.find();
    res.status(201).json(mealList);
  } catch (error) {
    res.status(422).json(error);
  }
});

// get individual user

router.get("/getMeal/:id", async (req, res) => {
  try {
    console.log(req.params);
    const userindividual = await Meal.findById(req.params.id);
    res.status(201).send(userindividual);
  } catch (error) {
    res.status(422).json(error);
  }
});

// update user data
router.patch("/editMeal/:id", async (req, res) => {
  try {
    const updateduser = await Meal.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.status(201).json(updateduser);
  } catch (error) {
    res.status(422).json(error);
  }
});

module.exports = router;
