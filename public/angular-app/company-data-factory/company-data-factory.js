/* global angular $ APIKEY key*/
angular.module('meanNASDAQ').factory('companyDataFactory', companyDataFactory);

function companyDataFactory($http) {
    //console.log("Inside hotelDataFactory");
    return {
        companyList: companyList,
        companyDisplay: companyDisplay,
        companyBySymbol: companyBySymbol,
        companyDetails: companyDetails,
        companyCount: companyCount
    };
    
    function companyCount() {
      var route = '/api/companies-count';     
      return $http.get(route).then(complete).catch(failed);  
    }

    function companyList(offset,count) {
      var route = '/api/companies?count=15&offset='+offset;     
      return $http.get(route).then(complete).catch(failed);  
    }
    
    function companyDisplay(id) {
        return $http.get('/api/company/' + id).then(complete).catch(failed);
    }
    
    function companyBySymbol(symbol) {
        return $http.get('/api/companyBySymbol/' + symbol).then(complete).catch(failed);
    }
    
    function companyDetails(symbol,key) {
        var url = "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol="+symbol+"&apikey="+key;
        console.log(url);
        return $http({
            method: "GET",
            url : url
        });
    }
    
    function complete(response) {
        return response;
    }
    
    function failed(error) {
        console.log(error.statusText);
    }
}
