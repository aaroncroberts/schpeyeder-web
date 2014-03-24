
/*
 * Initialize our app and add our Controllers
 */ 
angular
	.module('schpeyeder-web', [
	    'schpeyeder-web.controllers',
	  	'schpeyeder-web.services',
	  	'ngRoute'
	])
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider
			.when("/drivers", {templateUrl: "/partials/drivers.html", controller: "driversController"})
			.when("/drivers/:id", {templateUrl: "/partials/drivers.html", controller: "driverController"})
			.otherwise({redirectTo: '/drivers'});
		}
	]);