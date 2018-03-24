/*global  angular*/
angular.module('meanNASDAQ').controller('CompanyController', CompanyController);
function CompanyController($route, $routeParams, $window, companyDataFactory, AuthFactory, jwtHelper) {
    var vm = this;
    var id = $routeParams.companyId;
    console.log($routeParams);
    console.log("id " + id);
    //vm.isSubmitted = false;
    companyDataFactory.companyDisplay(id).then(function(response) {
        console.log(response);
        vm.company = response.data;
    });

    vm.isLoggedIn = function() {
        if (AuthFactory.isLoggedIn) {
          //  console.log("yes. logged in");
            return true;
        }
        else {
        //    console.log("no. not logged in");
            return false;
        } 
    };
    

    vm.getCompanyDetails = function() {
        var vm = this;
        var symbol = vm.company.Symbol;
        var key = "ZNUTL939MS3TW5UF";
        console.log("Symbol",symbol);
        companyDataFactory.companyDetails(symbol, key).then(function(response) {
            console.log(response);
            vm.displayPrice = true;
            var date = response.data["Meta Data"]["3. Last Refreshed"];
            console.log(date);
            var priceData = response.data["Time Series (Daily)"][date];
            vm.price = {
                date : date,
                open : priceData["1. open"],
                close : priceData["4. close"],
                high : priceData["2. high"],
                low : priceData["3. low"],
                volume : priceData["5. volume"]
            };
            
            console.log(vm.price);

        });
    };

}    



