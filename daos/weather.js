const Weather = require('../models/weather');

module.exports = {};

module.exports.getWeather = async (location) => {
  const weather = await Weather.findOne({ name: location }).lean();
  return weather;
}
