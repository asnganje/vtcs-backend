const express = require('express')
const router = express.Router()
const {createUser, login, logout} = require('../controllers/authController')

router.route('/register').post(createUser)
router.route('/login').post(login)
router.route('/').get(logout)

module.exports = router;
