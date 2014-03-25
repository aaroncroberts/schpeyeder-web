
/*
 * Initialize our app and add our Controllers
 */ 
angular
	.module('schpeyeder-web', [
       'schpeyeder-web.controllers',
       'schpeyeder-web.services',
       'schpeyeder-web.directives',
       'ui.router'
	])
	.config(function($stateProvider, $urlRouterProvider) {
		//
		// For any unmatched url, redirect to /drivers
		$urlRouterProvider.otherwise('/drivers');
		
		//
		// Set up state's routes, controllers, and views
		//
		$stateProvider
			.state('drivers', {
				url: '/drivers',
			    views: {	
			    	'menu': { 
			    		templateUrl: 'partials/navigation/top-nav.html', 
			    		controller: 'moviesController' 
			    	},
			        'content': { 
			        	templateUrl: 'partials/drivers.list.html', 
			        	controller: 'driversController' 
			        }
			    }
			})

			.state('movies', {
				url: '/movies',
			    views: {
			    	'menu': { 
			    		templateUrl: 'partials/navigation/top-nav.html', 
			    		controller: 'moviesController' 
			    	},
			    	'content': { 
			    		templateUrl: 'partials/movies.list.html', 
			    		controller: 'moviesController' 
			    	}
			    }
			})			
	});