const Weather = require('../models/weather')

module.exports = {};

module.exports.create = (weather) => {
  return Weather.create(weather);
};

module.exports.getAll = () => {
  return Weather.find().lean();
};

module.exports.getWeatherByName = (name) => {
  return Weather.findOne({ name }).lean();
};