
var express = require('express')

var controller = require('../controller/ElectronicController')

var router = express.Router();



router.get('/', controller.index)
router.get('/computer', controller.computer)

module.exports = router;
