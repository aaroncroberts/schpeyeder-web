// Create the Closure namespace
goog.provide('schpeyeder.web.components.movie.services.MovieDataService');

goog.scope(function(){
	
	/**
	 * @param $http
	 * @ngInject
	 * @export
	 * @constructor
	 */
	schpeyeder.web.components.movie.services.MovieDataService = function($http) {
	
		var service = {};
	
		/**
		 * @export
		 */
		service.getMovies = function() {
			return $http({
				method: 'JSONP', 
				url: 'http://api.rottentomatoes.com/api/public/v1.0/lists/movies/upcoming.json?apikey=exvnunhcnw6tauyrwnckejn6&callback=JSON_CALLBACK'
			});
		}
	
		return service;		
		
	}; // end MovieDataService
}); // end goog.scope