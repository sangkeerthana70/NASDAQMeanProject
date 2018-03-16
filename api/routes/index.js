var express = require('express');
var router = express.Router();

var ctrlStocks = require('../controllers/stocks.controllers.js');

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
  
module.exports = router;    