/*global  angular*/
angular.module('meanNASDAQ').controller('SymbolController', SymbolController);

function SymbolController($route, $routeParams, $window, companyDataFactory, AuthFactory, jwtHelper) {
    var vm = this;
    var symbol = $routeParams.symbol;
    console.log($routeParams);
    console.log("symbol " + symbol);
    //vm.isSubmitted = false;
    companyDataFactory.companyBySymbol(symbol).then(function(response) {
        console.log("I am SymbolController:companyBySymbol");
        console.log(response);
        vm.company = response.data;
    });
    
    vm.getcompanyBySymbol = function () {
        console.log("In SymbolController");
        var symbol= {
            CompanyId: vm.company._id,
            Symbol: vm.company.Symbol
            };
    };
}