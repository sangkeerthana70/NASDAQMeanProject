/* global angular*/
angular.module('meanNASDAQ').factory('companyDataFactory', companyDataFactory);

function companyDataFactory($http) {
    //console.log("Inside hotelDataFactory");
    return {
        companyList: companyList,
        companyDisplay: companyDisplay,
    };
    
    function companyList() {
        console.log("I am here");
      return $http.get('/api/companies?count=10').then(complete).catch(failed);  
    }
    
    function companyDisplay(id) {
        return $http.get('/api/company/' + id).then(complete).catch(failed);
    }
    
    function complete(response) {
        return response;
    }
    
    function failed(error) {
        console.log(error.statusText);
    }
}
