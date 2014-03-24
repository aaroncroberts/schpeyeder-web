/*
 * Create services for use by Angular
 */
angular.module("schpeyeder-web.services", [])
	.factory("driversAPIService", function($http) {

		var driversAPI = {};

		// Create a function for getting drivers
		driversAPI.getDrivers = function() {
			return $http({
				method: "JSONP", 
				url: "http://ergast.com/api/f1/2013/driverStandings.json?callback=JSON_CALLBACK"
			});
		}

		return driversAPI;		
	})
	.factory("moviesAPIService", function($http) {

		var moviesAPI = {};

		// Create a function for getting drivers
		moviesAPI.getMovies = function() {
			return $http({
				method: "JSONP", 
				url: "http://api.rottentomatoes.com/api/public/v1.0/lists/movies/upcoming.json?apikey=exvnunhcnw6tauyrwnckejn6&callback=JSON_CALLBACK"
			});
		}

		return moviesAPI;		
	}
			
);