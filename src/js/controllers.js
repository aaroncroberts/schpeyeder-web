
/*
 * Create Controllers for use by AngularJS
 */ 
angular.module('schpeyeder-web.controllers', [])
	.controller('driversController', function($scope, driversAPIService) {
		$scope.query = null;
	    $scope.driversList = [];
	    
	    // Create a function for searching using the nameFilter
	    $scope.search = function (driver) {
	        var keyword = new RegExp($scope.query, 'i');
	        return !$scope.query || keyword.test(driver.Driver.givenName) || keyword.test(driver.Driver.familyName);
	    };
	
	    // Make the call to the function to get data from the api
	    driversAPIService.getDrivers()
	    	.success(function (response) {
	    		// Dig into the response to get the relevant data
	    		$scope.driversList = response.MRData.StandingsTable.StandingsLists[0].DriverStandings;
	    	});
	})
	.controller('moviesController', function($scope, moviesAPIService) {
		$scope.query = null;
	    $scope.moviesList = [];
	    
	    // Create a function for searching using the nameFilter
	    $scope.search = function (movie) {
	        var keyword = new RegExp($scope.query, 'i');
	        return !$scope.query || keyword.test(movie.title);
	    };
	
	    // Make the call to the function to get data from the api
	    moviesAPIService.getMovies()
	    	.success(function (response) {
	    		// Dig into the response to get the relevant data
	    		$scope.moviesList = response.movies;
	    	});
	    
	    // Set the rating
	    $scope.rating = 5;
	    
	    // Create a function for the rating
	    $scope.saveRating = function(rating) { 
	        //$window.alert('Rating selected - ' + rating); 
	    }; 
	}
);