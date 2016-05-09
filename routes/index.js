var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser')

/* GET home page. */
var eventList = [{date:"7/12/16",name:"LoHi farmers Market"},{date:"6/5/16",name:"County Fair"}]


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/events', function(req, res){
  res.json(eventList)
})

router.post('/newEvent', function(req, res){
  console.log(req.body.date)
  eventList.push({date:req.body.date,name:req.body.name})
  res.json(eventList)
})

module.exports = router;
