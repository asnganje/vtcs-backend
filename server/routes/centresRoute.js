const express = require('express')
const router = express.Router()
const { addVTC, getAllVTCs, updateVTC, deleteVTC, getVTC } = require('../controllers/vtcentreController')

router.route('/').post(addVTC).get(getAllVTCs).delete(deleteVTC)

router.route('/:id').patch(updateVTC).get(getVTC)

module.exports = router;