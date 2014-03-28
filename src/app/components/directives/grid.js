// Create the Closure namespace
goog.provide('schpeyeder.web.components.directives.grid')

goog.scope(function(){
		
	/**
	 * @ngInject
	 * @export
	 * @constructor
	 */
	schpeyeder.web.components.directives.grid = function() {
		return{
			restrict: 'E',
			templateUrl: '/app/components/directives/grid.template.html',    					
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