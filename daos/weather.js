const Weather = require('../models/weather');

module.exports = {};


module.exports.getByLocation = (inputName) => {
    if (inputName) {
        return Weather.findOne({ name: inputName }).lean();;
    } else {
        return null;
    }

}