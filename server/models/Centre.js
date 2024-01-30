const mongoose = require('mongoose')

const CentreSchema = new mongoose({
    name: {
        type: String,
        required: [true, 'please provide vtc name']
    },
    ward: {
        type: String,
        required: [true, 'please provide vtc ward']
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'Please provide email']
    },
    phone: {
        type: String,
        unique: true,
        required: [true, 'Please provide phone number']
    }
})

const Centre = mongoose.model('Centre', CentreSchema)

module.exports = Centre;