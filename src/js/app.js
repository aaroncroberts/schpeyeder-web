
/*
 * Initialize our app and add our Controllers
 */ 
angular
	.module("schpeyeder-web", [
       "schpeyeder-web.controllers",
       "schpeyeder-web.services",
       "ui.router"
	])
	.config(function($stateProvider, $urlRouterProvider) {
		//
		// For any unmatched url, redirect to /drivers
		$urlRouterProvider.otherwise("/drivers");
		
		//
		// Set up the states
		$stateProvider
			.state("drivers", {
				url: "/drivers",
			    views: 
			    {
			          "menu": { templateUrl: "partials/menu1.html", controller: "driversController" },
			          "content": { templateUrl: "partials/drivers.list.html", controller: "driversController" }
			    }
			})

			.state("movies", {
				url: "/movies",
			    views: 
			    {
			          "menu": { templateUrl: "partials/menu2.html", controller: "moviesController" },
			          "content": { templateUrl: "partials/movies.list.html", controller: "moviesController" }
			    }
			})			
	});