var express = require('express');
var router = express.Router();
const mainController = require('../controllers/mainController')

/* GET home page. */
router.get('/', mainController.showMainView);
router.get('/:page', mainController.showMainView);

module.exports = router;
