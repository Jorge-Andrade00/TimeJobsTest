require('dotenv').config()
const express = require('express')
const app = express()
require('./database')

//Routes
app.use('/api', require('./Routes/weather.routes'))

//run server
app.listen(process.env.PORT, ()=>{
    console.log(`Server on port ${process.env.PORT}`);
})