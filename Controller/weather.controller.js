const helper = require('../Helpers/weather.helper')
const City = require('../Models/City')

const getWeatherByCity = async (req, res) => {
    let data
    let city = req.params.city.toLowerCase()
    const start = new Date()
    //existe en la base de datos?
    const cities = await City.find({
        city: city
    })
    if (cities.length !== 0) {
        const end = new Date()
        console.log('existe en la bd');
        res.header('request-time', `${end - start} ms`)
        res.send(cities[0].currentWeather)
    } else {
        helper.getCurrentWeatherByCityName(city, async (err, currentWeather) => {

            if (!err) {
                const newCity = new City({
                    country: currentWeather.sys.country,
                    city: city,
                    currentWeather: currentWeather.weather
                })
                console.log('creando en la bd');
                await newCity.save()
                const end = new Date()
                res.header('request-time', `${end - start} ms`)
                res.send(newCity.currentWeather)
            }
        });
    }
}

module.exports = {
    getWeatherByCity
}