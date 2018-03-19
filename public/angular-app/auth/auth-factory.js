/* global angular */
angular.module('meanNASDAQ').factory('AuthFactory', AuthFactory);

function AuthFactory() {
    var auth = {
        isLoggedIn: false
    };
    return {
        auth: auth
    };
    
}