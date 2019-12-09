var express = require('express');
var router = express.Router();
const User = require('../models').User;
const faker = require('faker');



/* GET users listing. */
router.get('/', function(req, res, next) {


//get some fake data for example
const username = faker.internet.userName();
const password = faker.internet.password();
const firstName = faker.name.firstName();
const lastName = faker.name.lastName();
const body = {
  username: username, 
  password: password,
  firstname: firstName, 
  lastname: lastName
};

//create a user
const newUser = User.create(body);

//find the user



//destroy the user with the object, this will call DELETE where id = our_user_id automatically.

  res.send('respond with a resource');
});

module.exports = router;
