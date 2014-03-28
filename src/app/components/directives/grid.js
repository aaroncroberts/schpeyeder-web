// Create the Closure namespace
goog.provide('schpeyeder.web.components.directives.grid')

goog.scope(function(){
		
	/**
	 * @ngInject
	 * @export
	 * @constructor
	 */
	schpeyeder.web.components.directives.grid = function() {
		
		/**
		 * @export
		 *  
		 */
		var getProperties = function(obj) {
			var props = [];
			
			for( key in obj ){
				if(obj.hasOwnProperty(key)){
					props.push(new { key: key, value: obj[key] });
					
					// recurse
					props.push(getPropertyNames(obj[key]));
				}
			}
			
			return props;
		};
		
		return{
			restrict: 'E',
			templateUrl: '/app/components/directives/grid.template.html',    					
			scope: 
			{		
				output : '=',
				gridData : '=',
				gridColumns : '='
			},
			link : function(scope, elem, attrs){				  			 
				// Get the scope data
				var columns = scope.gridColumns;
				var output = scope.gridData;
			}
		}
		
	};// end directive
}); // end goog.scope