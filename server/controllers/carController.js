const { Car } = require('../models');

exports.createCar = async (req, res) => {
  try {
    const { title, description, tags, images } = req.body;
    const car = await Car.create({ title, description, tags, images, userId: req.user.id });
    res.status(201).json(car);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getCars = async (req, res) => {
  try {
    const cars = await Car.findAll({ where: { userId: req.user.id } });
    res.json(cars);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getCarById = async (req, res) => {
  try {
    const car = await Car.findOne({ where: { id: req.params.id, userId: req.user.id } });
    if (!car) return res.status(404).json({ error: 'Car not found' });
    res.json(car);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateCar = async (req, res) => {
  try {
    const { title, description, tags, images } = req.body;
    const car = await Car.findOne({ where: { id: req.params.id, userId: req.user.id } });
    if (!car) return res.status(404).json({ error: 'Car not found' });
    await car.update({ title, description, tags, images });
    res.json(car);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteCar = async (req, res) => {
  try {
    const car = await Car.findOne({ where: { id: req.params.id, userId: req.user.id } });
    if (!car) return res.status(404).json({ error: 'Car not found' });
    await car.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
