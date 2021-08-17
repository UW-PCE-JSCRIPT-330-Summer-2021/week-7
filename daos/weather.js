const Weather = require('../models/weather');

module.exports = {};

module.exports.getWeather = async (location) => {
    return await Weather.findOne({ name: location }).lean();
};