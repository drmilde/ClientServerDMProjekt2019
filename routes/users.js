var express = require('express');
var router = express.Router();

var ADRESSE;
var CHANGED = "0";

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* GET users listing. */
router.get('/karim', function(req, res, next) {
	CHANGED = "1";
	ADRESSE = "https://www.hs-fulda.de/angewandte-informatik/ueber-uns/professuren/details/person/prof-dr-karim-khakzar-307/contactBox";
	res.send("ok: karim");
});

/* GET users listing. */
router.get('/kathrin', function(req, res, next) {
	CHANGED = "1";
	ADRESSE = "https://www.hs-fulda.de/sozialwesen/ueber-uns/professuren/details/person/prof-dr-kathrin-becker-schwarze-17/contactBox";
	res.send("ok: kathrin");
});

/* GET users listing. */
router.get('/adresse', function(req, res, next) {
	CHANGED = "0";
	res.send(ADRESSE);
});

/* GET users listing. */
router.get('/changed', function(req, res, next) {
	console.log(CHANGED);
	res.send(CHANGED);
});






module.exports = router;
