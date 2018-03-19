var mongoose = require('mongoose');
var Company = mongoose.model('Company');

module.exports.stockDefaultRoute = function(req, res) {
    console.log('I am in Default route');
    res
      .status(200)
      .send("Hello World");
  };
  
  
module.exports.companiesGetAll = function(req, res) {
    console.log('I am in the stocks route');
    //console.log(req.query);
    
  var offset = 0;
  var count = 5;
  var maxCount = 50;
    
  if (req.query && req.query.offset) {
    offset = parseInt(req.query.offset, 10);
  }

  if (req.query && req.query.count) {
    count = parseInt(req.query.count, 10);
  }

  if (isNaN(offset) || isNaN(count)) {
    res
      .status(400)
      .json({
        "message" : "If supplied in querystring, count and offset must both be numbers"
      });
    return;
  }

  if (count > maxCount) {
    res
      .status(400)
      .json({
        "message" : "Count limit of " + maxCount + " exceeded"
      });
    return;
  }

    Company
      .find({}, 'Name LastSale MarketCap IPOyear')
      .skip(offset)
      .limit(count)
      .exec(function(err, companies) {
        console.log("Error message " + err);
        //console.log(companies);
        if (err) {
          console.log("Error finding companies");
          res
            .status(500)
            .json(err);
        } else {
          console.log("Found companies", companies.length);
          res
            .json(companies);
        }
      });
  
  };

module.exports.companyGetOne = function(req, res) {
    console.log("In the get Company by Id Route");
    var id = req.params.companyId;
    
    Company
        .findById(id)
        .exec(function(err, doc) {
          var response = {
            status : 200,
            message : doc
          };
          if (err) {
            console.log("Error finding Company");
            response.status = 500;
            response.message = err;
          } else if(!doc) {
            console.log("Company not found in database", id);
            response.status = 404;
            response.message = {
              "message" : "Company not found " + id
            };
          }
          res
            .status(response.status)
            .json(response.message);
        });

};

module.exports.companyGetBySymbol = function(req, res) {
    console.log("In the Get By Symbol Route");
    var symbol = req.params.symbol;
    
    Company
        .findOne({"Symbol": symbol})
        .exec(function(err, doc) {
          var response = {
            status : 200,
            message : doc
          };
          if (err) {
            console.log("Error finding Symbol of the Company");
            console.log(err);
            response.status = 500;
            response.message = err;
          } else if(!doc) {
            console.log("Company symbol not found in database", symbol);
            response.status = 404;
            response.message = {
              "message" : "Company symbol not found " + symbol
            };
          }
          res
            .status(response.status)
            .json(response.message);
        });

};

