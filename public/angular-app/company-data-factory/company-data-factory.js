/* global angular*/
angular.module('meanNASDAQ').factory('companyDataFactory', companyDataFactory);

function companyDataFactory($http) {
    //console.log("Inside hotelDataFactory");
    return {
        companyList: companyList,
        companyDisplay: companyDisplay,
        companyBySymbol: companyBySymbol
    };
    
    function companyList() {
        console.log("I am here");
      return $http.get('/api/companies?count=25').then(complete).catch(failed);  
    }
    
    function companyDisplay(id) {
        return $http.get('/api/company/' + id).then(complete).catch(failed);
    }
    
    function companyBySymbol(symbol) {
        return $http.get('/api/companyBySymbol/' + symbol).then(complete).catch(failed);
    }
    
    function complete(response) {
        return response;
    }
    
    function failed(error) {
        console.log(error.statusText);
    }
}
