// Create the Closure namespace
goog.provide('schpeyeder.web.core.directives.grid')

goog.scope(function(){
		
	/**
	 * @ngInject
	 * @export
	 * @constructor
	 */
	schpeyeder.web.core.directives.grid = function() {
		return{
			restrict: 'E',
			templateUrl: '/core/directives/grid/template.html',    					
			scope: 
			{
			  gridData : '=',
			  gridColumns : '='
			},
			link : function(scope, elem, attrs){				  			 
	
			}
		}
		
	};// end directive
}); // end goog.scope