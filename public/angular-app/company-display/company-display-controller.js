/*global  angular*/
angular.module('meanNASDAQ').controller('CompanyController', CompanyController);

function CompanyController($route, $routeParams, $window, companyDataFactory) {
    var vm = this;
    var id = $routeParams.id;
    //vm.isSubmitted = false;
    companyDataFactory.companyDisplay(id).then(function(response) {
        console.log("I am CompanyController:companyDisplay");
        vm.company = response.data;
    });
}