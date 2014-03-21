
/*
 * Create Controllers for use by AngularJS
 */ 
angular.module('schpeyeder-web.controllers', []).
controller('driversController', function($scope, driversAPIService) {
	$scope.nameFilter = null;
    $scope.driversList = [];

    // Make the call to the function to get data from the api
    driversAPIService.getDrivers().
    	success(function (response) {
    		// Dig into the response to get the relevant data
    		$scope.driversList = response.MRData.StandingsTable.StandingsLists[0].DriverStandings;
    	});
});