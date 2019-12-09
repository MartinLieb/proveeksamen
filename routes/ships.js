var express = require('express');
var router = express.Router();
const Ships = require('../models').Ship;
const faker = require('faker');



/* GET users listing. */
router.get('/', function(req, res, next) {


//get some fake data for example
const navn = faker.name.firstName();
const hjemhavn = faker.address.city();
const kaldesignal = faker.random.number();
const mmsi_nummer = faker.random.number();
const anvendelse = faker.lorem.words();
const brt_bt = faker.random.number();
const laengde = faker.random.number();
const max_om_bord = faker.random.number();
const body = {
  navn: navn, 
  hjemhavn: hjemhavn,
  kaldesignal: kaldesignal, 
  mmsi_nummer: mmsi_nummer,
  anvendelse: anvendelse, 
  brt_bt: brt_bt,
  laengde: laengde, 
  max_om_bord: max_om_bord
};

//create a user
const newUser = Ships.create(body);

//find the user



//destroy the user with the object, this will call DELETE where id = our_user_id automatically.

  res.send('respond with a resource');
});

module.exports = router;
