// Set the namespace for the Closure
goog.provide('schpeyeder.web.components.driver.DriverDataService');

goog.scope(function(){
	
	/**
	 * @param $http
	 * @ngInject
	 * @export
	 * @constructor
	 */
	schpeyeder.web.components.driver.DriverDataService = function($http) {
	
		var service = {};
	
		/**
		 * @export
		 */
		service.getDrivers = function() {
			return $http({
				method: 'JSONP', 
				url: 'http://ergast.com/api/f1/2013/driverStandings.json?callback=JSON_CALLBACK'
			});
		}
	
		return service;		
		
	}; // end DriverDataService
}); // end goog.scope