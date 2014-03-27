// Create the namespace
goog.provide('schpeyeder.web.core.state');

// Include dependencies
goog.require('schpeyeder.web.components.driver.DriverCtrl');
goog.require('schpeyeder.web.components.movie.MovieCtrl');

goog.scope(function(){
		
	/**
	 * @param $stateProvider
	 * @param $locationProvider
	 * @param $locationProvider
	 * @ngInject
	 * @export
	 * @constructor
	 */
	schpeyeder.web.core.state = function($stateProvider, $locationProvider, $urlRouterProvider) {						

        $urlRouterProvider
	        .otherwise('/drivers');
		
		// Configure the State Provider
		$stateProvider	
			.state('home', {
				url: '/',
				views: {	
			    	'menu': { 
			    		templateUrl: '/partials/navigation/top-nav.html', 
			    		controller: 'DriverCtrl' 
			    	},
			        'content': { 
			        	templateUrl: '/partials/drivers.list.html', 
			        	controller: 'DriverCtrl' 
			        }
			    }
			})
			.state('drivers', {
				url: '/drivers',
			    views: {	
			    	'menu': { 
			    		templateUrl: '/partials/navigation/top-nav.html', 
			    		controller: 'DriverCtrl' 
			    	},
			        'content': { 
			        	templateUrl: '/partials/drivers.list.html', 
			        	controller: 'DriverCtrl' 
			        }
			    }
			})			
			.state('movies', {
				url: '/movies',
			    views: {
			    	'menu': { 
			    		templateUrl: '/partials/navigation/top-nav.html', 
			    		controller: 'MovieCtrl' 
			    	},
			    	'content': { 
			    		templateUrl: '/partials/movies.list.html', 
			    		controller: 'MovieCtrl' 
				    	}
				    }
				});
				
			// Set the location provider html 5 mode
			$locationProvider.html5Mode(true);
			
		};// end function 	
});// end goog scope

