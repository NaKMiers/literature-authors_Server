const express = require('express')
const router = express.Router()

const DataControllers = require('../app/controllers/DataControllers')

router.get('/get', DataControllers.getData)
router.put('/edit/:id', DataControllers.editData)

module.exports = router
