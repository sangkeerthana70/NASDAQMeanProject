/*global  angular*/
angular.module('meanNASDAQ').controller('CompaniesController', CompaniesController);

function CompaniesController(companyDataFactory) {
    console.log("CompaniesController");
    var vm = this;
    vm.title = 'MEAN NASDAQ App';
    companyDataFactory.companyList().then(function(response) {
        //console.log(response);
        console.log(response.data);
        vm.companies = response.data;
        //add the hotel property to the view model.
    });
}