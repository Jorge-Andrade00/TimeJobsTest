const {
    Schema,
    model
} = require('mongoose')

const CityShema = new Schema({
    country: {
        type: String,
        trim: true
    },
    city: {
        type: String,
        trim: true
    },
    currentWeather: {
        type: Array
    }
}, {
    timestamps: true
})

module.exports = model('City', CityShema)