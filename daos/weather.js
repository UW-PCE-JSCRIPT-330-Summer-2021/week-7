const Weather = require('../models/weather');
module.exports = {};

module.exports.getWeather = async (locationName) => {
  const weather = await Weather.findOne({ name: locationName }).lean();
  return weather;
}