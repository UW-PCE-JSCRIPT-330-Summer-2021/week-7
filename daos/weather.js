const Weather = require('../models/weather');

module.exports = {};

module.exports.getByLocation = (locationName) => {
  if (locationName) {
    return Weather.findOne({ name: locationName }).lean();
  } else {
    return null;
  }
};
