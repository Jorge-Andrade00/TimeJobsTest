require('dotenv').config()

const getWeatherByCity = (req, res) => {
    res.send(`La ciudad que buscas es ${req.params.city}`)
}

module.exports = {
    getWeatherByCity
}