const express = require('express')
const router = express.Router()
const { addVTC, getAllVTCs, updateVTC, deleteVTC, getVTC } = require('../controllers/vtcentreController')

router.route('/centre').post(addVTC).get(getAllVTCs).delete(deleteVTC).patch(updateVTC)

router.route('/centre/:id').get(getVTC)

module.exports = router;