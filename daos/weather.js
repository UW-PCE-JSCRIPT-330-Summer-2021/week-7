const mongoose = require("mongoose");

const Weather = require("../models/weather");

module.exports = {};

module.exports.getByName = async (name) => {
  return Weather.find({ name: name }).lean();
};

class BadDataError extends Error {}
module.exports.BadDataError = BadDataError;
