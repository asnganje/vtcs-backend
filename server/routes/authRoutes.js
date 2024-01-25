const express = require('express')
const router = express.Router()

router.route('/register').post()
router.route('/login').post()
router.route('/').get()

module.exports = router;
