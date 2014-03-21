/*
 * Create services for use by Angular
 */
angular.module('schpeyeder-web.services', []).
  factory('driversAPIService', function($http) {

    var driversAPI = {};

    // Create a function for getting drivers
    driversAPI.getDrivers = function() {
      return $http({
        method: 'JSONP', 
        url: 'http://ergast.com/api/f1/2013/driverStandings.json?callback=JSON_CALLBACK'
      });
    }

    return driversAPI;
});