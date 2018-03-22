/*global  angular  CompaniesController  CompanyController SymbolController RegisterController*/
angular.module('meanNASDAQ', ['ngRoute', 'angular-jwt']).config(config).run(run);//modified the app.js to configure a single route now

function config($httpProvider,$routeProvider) {//a built in angular service where we define routes.
    $httpProvider.interceptors.push('AuthInterceptor');//use AuthInterceptor to intercept http requests.
    
    $routeProvider
        .when('/', {
            templateUrl: 'angular-app/main/welcome.html',
            access: {
                restricted: false
            }
        })
        .when('/companies', {
            templateUrl: 'angular-app/company-list/companies.html',
            controller: CompaniesController,
            controllerAs: 'vm',
            access: {
                restricted: false
            }
        })
        .when('/company/:companyId', {
            templateUrl: 'angular-app/company-display/company.html',
            controller: CompanyController,
            controllerAs: 'vm',
            access: {
                restricted: false
            }
        })
        .when('/companyBySymbol/:symbol', {
            templateUrl: 'angular-app/main/welcome.html',
            controller: SymbolController,
            controllerAs: 'vm',
            access: {
                restricted: false
            }
            
        })
        .when('/register', {
            templateUrl: 'angular-app/register/register.html',
            controller: RegisterController,
            controllerAs: 'vm',
            access: {
                restricted: false
            }
        })
        .when('/profile', {//restricted path, user cannot access their profile unless logged in.
            templateUrl: 'angular-app/profile/profile.html',
            access: {
                restricted: true
            }
        })
        .otherwise({
            redirectTo: '/'
        });
    }
   
function run($rootScope, $location, $window, AuthFactory) {
  $rootScope.$on('$routeChangeStart', function(event, nextRoute, currentRoute) {
    if (nextRoute.access !== undefined && nextRoute.access.restricted && !$window.sessionStorage.token && !AuthFactory.isLoggedIn) {
      event.preventDefault();
      $location.path('/');
    }
  });
}



