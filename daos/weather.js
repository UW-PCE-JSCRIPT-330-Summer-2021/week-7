const Weather = require('../models/weather');

module.exports = {}

module.exports.getWeatherByLocation = async (location) => {
    return await Weather.findOne({ name: location }).lean();
}
