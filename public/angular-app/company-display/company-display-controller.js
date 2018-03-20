/*global  angular*/
angular.module('meanNASDAQ').controller('CompanyController', CompanyController);

function CompanyController($route, $routeParams, $window, companyDataFactory) {
    var vm = this;
    var id = $routeParams.companyId;
    console.log($routeParams);
    console.log("id " + id);
    //vm.isSubmitted = false;
    companyDataFactory.companyDisplay(id).then(function(response) {
        console.log("I am CompanyController:companyDisplay");
        console.log(response);
        vm.company = response.data;
    });
}