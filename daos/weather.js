const Weather = require('../models/weather');
module.exports = {};

module.exports.getWeather = async (loc) => {
  const weather = await Weather.findOne({ name: loc }).lean();
  return weather;
}