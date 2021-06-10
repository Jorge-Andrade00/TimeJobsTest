require('dotenv').config()
const express = require('express')
const app = express()

//Routes
app.use(require('./Routes/index'))

//run server
app.listen(process.env.PORT, ()=>{
    console.log(`Server on port ${process.env.PORT}`);
})