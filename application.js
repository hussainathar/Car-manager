var carApp = angular.module('carApp', ['ngStorage','highcharts-ng']);


carApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/Phases', {
	templateUrl: 'html/carPhase.html',
	controller: 'CarPhaseController'
      }).
      when('/ShowDetails', {
	templateUrl: 'html/details.html',
	controller: 'ShowCarController'
      }).

      when('/Home', {
	templateUrl: 'html/carHome.html',
	controller: 'HomeController'
      }).

      otherwise({
	redirectTo:'/Home'
      });
}]);

