// Create the Closure namespace
goog.provide('schpeyeder.web.app')

// Include Dependencies
goog.require('schpeyeder.web.components.driver.DriverDataService')
goog.require('schpeyeder.web.components.driver.DriverCtrl')
goog.require('schpeyeder.web.components.movie.MovieDataService')
goog.require('schpeyeder.web.components.movie.MovieCtrl')
goog.require('schpeyeder.web.components.directives.rating')
goog.require('schpeyeder.web.components.directives.grid')
goog.require('schpeyeder.web.components.directives.editable')
goog.require('schpeyeder.web.state')

schpeyeder.web.app = angular.module('schpeyeder.web', ['ui.router']);

/*
 *  Services
 */
schpeyeder.web.app.service('driverDataService', schpeyeder.web.components.driver.DriverDataService);
schpeyeder.web.app.service('movieDataService', schpeyeder.web.components.movie.MovieDataService);

/*
 *  Controllers
 */
schpeyeder.web.app.controller('DriverCtrl', schpeyeder.web.components.driver.DriverCtrl);
schpeyeder.web.app.controller('MovieCtrl', schpeyeder.web.components.movie.MovieCtrl);

/*
 * 	Directives
 */
schpeyeder.web.app.directive('rating', schpeyeder.web.components.directives.rating);
schpeyeder.web.app.directive('grid', schpeyeder.web.components.directives.grid);
schpeyeder.web.app.directive('editable', schpeyeder.web.components.directives.editable);

/*
 * 	Routing
 */
schpeyeder.web.app.config(schpeyeder.web.state);
