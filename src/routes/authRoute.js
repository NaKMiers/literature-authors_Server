const express = require('express')
const router = express.Router()

const AuthController = require('../app/controllers/AuthController')

router.post('/check-admin', AuthController.checkAdmin)

module.exports = router
