const Weather = require('../models/weather')
const mongoose = require('mongoose')

module.exports = {}

module.exports.getByLocation = async (location) => {
    const weathers = await Weather.find().lean();
    const weatherForLocation = await Weather.findOne({ name: location }).lean();
    return weatherForLocation;
}