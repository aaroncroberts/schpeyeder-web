// Create the namespace
goog.provide('schpeyeder.web.state');

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
	schpeyeder.web.state = function($stateProvider, $locationProvider, $urlRouterProvider) {						

        $urlRouterProvider
	        .otherwise('/drivers');
		
		// Configure the State Provider
		$stateProvider	
			.state('home', {
				url: '/',
				views: {	
			    	'menu': { 
			    		templateUrl: '/app/components/driver/list/top-nav.html', 
			    		controller: 'DriverCtrl' 
			    	},
			        'content': { 
			        	templateUrl: '/app/components/driver/driver/list/driver.html', 
			        	controller: 'DriverCtrl' 
			        }
			    }
			})
			.state('drivers', {
				url: '/drivers',
			    views: {	
			    	'menu': { 
			    		templateUrl: '/app/components/driver/list/top-nav.html', 
			    		controller: 'DriverCtrl' 
			    	},
			        'content': { 
			        	templateUrl: '/app/components/driver/list/driver.html', 
			        	controller: 'DriverCtrl' 
			        }
			    }
			})			
			.state('movies', {
				url: '/movies',
			    views: {
			    	'menu': { 
			    		templateUrl: '/app/components/driver/list/top-nav.html', 
			    		controller: 'MovieCtrl' 
			    	},
			    	'content': { 
			    		templateUrl: '/app/components/movie/list/movie.html', 
			    		controller: 'MovieCtrl' 
				    	}
				    }
				});
				
			// Set the location provider html 5 mode
			$locationProvider.html5Mode(true);
			
		};// end function 	
});// end goog scope

