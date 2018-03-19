var express = require('express');
var router = express.Router();

var ctrlStocks = require('../controllers/stocks.controllers.js');
var ctrlUsers = require('../controllers/users.controllers.js');

//stock company routes
router
  .route('/')
  .get(ctrlStocks.stockDefaultRoute);
  
router
  .route('/companies')
  .get(ctrlStocks.companiesGetAll);

router
  .route('/company/:companyId')
  .get(ctrlStocks.companyGetOne);
  
router
  .route('/companybySymbol/:symbol')
  .get(ctrlStocks.companyGetBySymbol);
  
//authentication routes
router
  .route('/users/register')
  .post(ctrlUsers.register);
  
router
  .route('/users/login')
  .post(ctrlUsers.login);

  
module.exports = router;    