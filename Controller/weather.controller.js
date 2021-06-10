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
        console.log('existe en la bd');
        data = cities[0].currentWeather
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
                data = newCity.currentWeather 
            }
        });
    }
    const end = new Date()
    const requestime = end - start;
    res.header('request_time', requestime)
    res.send(data)

}

module.exports = {
    getWeatherByCity
}