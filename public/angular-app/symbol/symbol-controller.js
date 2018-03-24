/*global  angular*/
angular.module('meanNASDAQ').controller('SymbolController', SymbolController);

function SymbolController($route, $routeParams, $window, companyDataFactory, AuthFactory, jwtHelper) {
    var vm = this;
        var symbol = $routeParams.symbol;
        console.log("symbol " + symbol);
        console.log("I am SymbolController:companyBySymbol");
        companyDataFactory.companyBySymbol(symbol).then(function(response) {
            vm.company = response.data;
            console.log(vm.company.Name);
        });
}