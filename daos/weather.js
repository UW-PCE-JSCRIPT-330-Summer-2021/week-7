const mongoose = require('mongoose');
const Weather = require('../models/weather');

module.exports = {};

module.exports.getByLocation = async (location) => {
    return await Weather.findOne({ name: location });
};