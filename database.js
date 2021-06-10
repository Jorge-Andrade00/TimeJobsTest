const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(db => console.log(`db connected to: ${db.connection.name}`))
.catch(err => console.log(err))