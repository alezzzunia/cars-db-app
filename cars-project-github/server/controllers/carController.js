const Car = require("../models/car");

const getCars = async (req, res) => {
  try {
    const cars = await Car.find({});
    res.send(cars);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred" });
  }
}

const getCar = async (req, res) => {
  try {
    const id = req.params.id;
    const car = await Car.findById(id);
    if (!car) {
      return res.status(404).json({ message: "Car not found" });
    }
    res.send(car);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred" });
  }
}

const addCar = async (req, res) => {
  try {
    const { name, model, price, image } = req.body;
    const car = await Car.create({ name, model, price, image });
    res.status(201).json({ message: "Car created successfully", car });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred" });
  }
}

const deleteCar = async (req, res) => {
  try {
    const id = req.params.id;
    const car = await Car.findByIdAndDelete(id);
    if (!car) {
      return res.status(404).json({ message: "Car not found" });
    }
    res.json({ message: "Car deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred" });
  }
}

const updateCar = async (req, res) => {
  try {
    const id = req.params.id;
    const { name, model, price, image } = req.body;
    const updatedCar = await Car.findByIdAndUpdate(id, { name, model, price, image }, { new: true });
    if (!updatedCar) {
      return res.status(404).json({ message: "Car not found" });
    }
    res.json({ message: "Car updated successfully", car: updatedCar });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred" });
  }
}

module.exports = {
  getCars,
  getCar,
  addCar,
  deleteCar,
  updateCar
}
