var express = require('express');
var router = express.Router();
var jsonRouter = require('./json');
var animalRouter = require('./animal/animal');
/* GET home page. */

router.use('/json',jsonRouter);
router.use('/animal',animalRouter);


module.exports = router;
