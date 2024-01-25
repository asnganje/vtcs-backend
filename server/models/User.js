const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const UserSchema = new mongoose.Schema({
    firstName: {
        type:String,
        required: [true, 'please provide a first name']
    },
    lastName: {
        type:String,
        required: [true, 'please provide a last name']
    },
    email: {
        type:String,
        required: [true, 'please provide email']
    },
    password: {
        type:String,
        required: [true, 'please provide a email']
    }
})

UserSchema.pre('save', async function() {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt)
})


const User = mongoose.model('User', UserSchema)

module.exports = User;