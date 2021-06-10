require('dotenv').config()
const OpenWeatherMapHelper = require("openweathermap-node");

const helper = new OpenWeatherMapHelper(
    {
        APPID: process.env.API_KEY,
        units: "imperial"
    }
);

module.exports = helper

