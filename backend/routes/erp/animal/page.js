var express = require('express');
var router = express.Router();

router.get("/animal", function(_req,_res){
  _res.render('layout/main2', { body:"../erp/animal",head:"../erp/head/tableHead",javascript:"../erp/javascript/tableJavascript",  csession:_req.csession});
});

router.get('/imagetest',function(_req,_res){
    _res.render('erp/imageTest',{});
});

module.exports = router;