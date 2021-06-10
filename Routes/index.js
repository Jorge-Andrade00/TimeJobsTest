const { Router } = require("express")
const route = Router()

const { getWeatherByCity }  = require('../Controller/weather.controller')

route.get('/', (req, res)=>{
    res.send("Hola mundo desde las rutas")
})

route.get('/api/:city', getWeatherByCity)

module.exports = route