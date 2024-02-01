const Centre = require("../models/Centre")

const addVTC = async (req,res) => {

    try {
        const vtc = await Centre.create(req.body)
        res.status(201).json({
            status: 'success',
            msg: vtc
        })
    } catch (error) {
        res.status(404).json({
            status: 'fail',
            msg: error
        })
    }
}

const getAllVTCs = async (req,res) => {
    try {
        const vtcs = await Centre.find({})
        res.status(200).json({
            status: 'success',
            msg: vtcs
        })
    } catch (error) {
        res.status(404).json({
            status: 'failure',
            msg: error
        })        
    }
}

const getVTC = async (req,res) => {
    try {
        const vtc = await Centre.find(req.body)
        res.status(200).json({
            status: 'success',
            msg: vtc
        })
    } catch (error) {
        res.status(404).json({
            status: 'fail',
            msg: error
        })          
    }
}

const updateVTC = async (req,res) => {
    const {email, ...rest} = req.body 
    try {
        const vtc = await Centre.findOneAndUpdate({email}, rest, {
            new: true,
            runValidators: true
        })

        res.status(200).json({
            status: 'success',
            msg: vtc
        })
    } catch (error) {
        res.status(404).json({
            status: 'fail',
            msg: error
        })
    }
}

const deleteVTC = async (req, res) => {
    try {
        await Centre.findOneAndDelete(req.body)
        res.status(200).json({
            status: 'success'
        })
    } catch (error) {
        res.status(404).json({
            status: 'fail',
            msg: error
        })
    }
}
module.exports = {
    addVTC,
    getAllVTCs,
    getVTC,
    updateVTC,
    deleteVTC
}