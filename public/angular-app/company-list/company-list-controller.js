/*global  angular*/
angular.module('meanNASDAQ').controller('CompaniesController', CompaniesController);

function CompaniesController(companyDataFactory) {
    console.log("CompaniesController");
    var vm = this;
    vm.title = 'MEAN NASDAQ App';
    companyDataFactory.companyList().then(function(response) {
        vm.companies = response.data;
        console.log(vm.companies);
        //add the hotel property to the view model.
    });
}