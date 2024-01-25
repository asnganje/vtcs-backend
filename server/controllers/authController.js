const User = require("../models/User")

const createUser = async (req,res) => {
    try {
        const user = await User.create(req.body)
        res.status(201).json({
            status: 'success',
            msg: user
        })
    } catch (error) {
        res.status(404).json({
            status: 'fail',
            msg: error
        })
    }

}

const login = async (req,res) => {
    const {email, password} = req.body

    const user = await User.findOne({email})
    if(user) {
    const isValid = (user.comparePassword(password))
    if(isValid) {
        res.status(200).json({
            status: 'success',
            msg:user 
        })
    } else {
        res.status(404).json({
            status: 'fail',
            msg: 'Incorrect password'
        })
    }
    } else {
        res.status(404).json({
            status: 'fail',
            msg: 'User not found'
        })
    }
    
}

const logout = async (req,res) => {
    try {
        const user = User.findOne(req.body)
        res.status(200).json({
            status: 'success',
            msg: user
        })
    } catch (error) {
        res.status(404).json({
            status: 'fail',
            msg: error
        })
    }
}

module.exports = {createUser, login, logout}