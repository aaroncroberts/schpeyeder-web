// Create the Closure namespace
goog.provide('schpeyeder.web.components.driver.DriverCtrl');

goog.scope(function(){
	
	/**
	 * @param $scope
	 * @param driverDataService
	 * @ngInject
	 * @export
	 * @constructor
	 */
	schpeyeder.web.components.driver.DriverCtrl = function($scope, driverDataService) {
		/**
		 * @export
		 */
		$scope.query = null;
		/**
	     * @export
	     */
		$scope.driversList = [];
		/**
	     * @export
	     */
		$scope.columns = [];
			
	    /**
	     * @export
	     */
	    $scope.columns = [
			{ key: 'Driver.givenName', display : 'First Name' },
			{ key: 'Driver.familyName', display: 'Last Name'},
			{ key: 'Constructors[0].name', display : "Sponsor" },
			{ key: 'points', display: "Points" }
		];
	    
	    /**
	     * @export
	     */
	    $scope.search = function (driver) {
	        var keyword = new RegExp($scope.query, 'i');
	        return !$scope.query || keyword.test(driver.Driver.givenName) || keyword.test(driver.Driver.familyName);
	    };
	
	    // Make the call to the function to get data from the api
	    driverDataService.getDrivers()
	    	.success(function (response) {
	    		// Dig into the response to get the relevant data
	    		$scope.driversList = response.MRData.StandingsTable.StandingsLists[0].DriverStandings;	    	
	    	});
	    
	};// end DriverCtrl
}); // end goog.scope