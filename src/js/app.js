// Create the Closure namespace
goog.provide('schpeyeder.web.app')

// Include Dependencies
goog.require('schpeyeder.web.components.driver.services.DriverDataService')
goog.require('schpeyeder.web.components.movie.services.MovieDataService')
goog.require('schpeyeder.web.components.driver.controllers.DriverCtrl')
goog.require('schpeyeder.web.components.movie.controllers.MovieCtrl')
goog.require('schpeyeder.web.core.directives.rating')
goog.require('schpeyeder.web.core.directives.grid')
goog.require('schpeyeder.web.core.state')

schpeyeder.web.app = angular.module('schpeyeder.web', ['ui.router']);

/*
 *  Services
 */
schpeyeder.web.app.service('drivers', schpeyeder.web.components.driver.services.DriverDataService);
schpeyeder.web.app.service('movies', schpeyeder.web.components.movie.services.MovieDataService);

/*
 *  Controllers
 */
schpeyeder.web.app.controller('drivers', schpeyeder.web.components.driver.controllers.DriverCtrl);
schpeyeder.web.app.controller('movies', schpeyeder.web.components.movie.controllers.MovieCtrl);

/*
 * 	Directives
 */
schpeyeder.web.app.directive('rating', schpeyeder.web.core.directives.rating);
schpeyeder.web.app.directive('grid', schpeyeder.web.core.directives.grid);

/*
 * 	Routing
 */
schpeyeder.web.app.config(schpeyeder.web.core.state);
