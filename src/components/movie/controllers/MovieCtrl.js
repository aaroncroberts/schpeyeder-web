// Create the Closure namespace
goog.provide('schpeyeder.web.components.movie.controllers.MovieCtrl');

goog.scope(function(){
	
	/**
	 * @param $scope
	 * @param movieDataService
	 * @ngInject
	 * @export
	 * @constructor
	 */
	schpeyeder.web.components.movie.controllers.MovieCtrl = function($scope, movieDataService) {
			
		/**
		 * @export
		 */
		$scope.query = null;
		
		/**
		 * @export
		 */
	    $scope.moviesList = [];
	    
	    /**
	     * @export
	     */
	    $scope.search = function (movie) {
	        var keyword = new RegExp($scope.query, 'i');
	        return !$scope.query || keyword.test(movie.title);
	    };
	
	    // Make the call to the function to get data from the api
	    movieDataService.getMovies()
	    	.success(function (response) {
	    		// Dig into the response to get the relevant data
	    		$scope.moviesList = response.movies;
	    	});
	    
	    /**
	     * @export
	     */
	    $scope.rating = 5;
	    
	    /**
	     * @export
	     */
	    $scope.saveRating = function(rating) { 
	        //$window.alert('Rating selected - ' + rating); 
	    }; 
	    
	}; // end MovieCtrl
}); // end goog.scope