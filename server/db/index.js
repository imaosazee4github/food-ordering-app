const mongoose = require('mongoose')

mongoose
    .connect('mongodb+srv://kelvin:1234@cluster0.k6dh29x.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db