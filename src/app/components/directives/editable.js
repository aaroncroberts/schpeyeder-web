// Create the Closure namespace
goog.provide('schpeyeder.web.components.directives.editable')

goog.scope(function(){
		
	/**
	 * @ngInject
	 * @export
	 * @constructor
	 */
	schpeyeder.web.components.directives.editable = function() {
						
		var template = '<span ng-hide="view.enabled" ng-click="enable()">{{value}}</span>' +					    
					   '<input class="" ng-show="view.enabled" ng-model="view.value" ng-blur="save()">';		
		return{
			restrict: 'A', 
			template: template,
			scope: 
			{		
				value: '=editModel'
			},
			link: function(scope, elem, attrs) {
				/**
				 * @export
				 */
	            scope.view = {	
	                value: scope.value,
	                enabled: false
	            };

	            /**
	             * @export
	             */
	            scope.enable = function() {
	                scope.view.enabled = true;
	                scope.view.value = scope.value;
	                
	                //alert(scope.view.enabled);
	            };

	            /**
	             * @export
	             */
	            var disable = function() {
	                scope.view.enabled = false;
	            };

	            /**
	             * @export
	             */
	            scope.save = function() {
	                scope.value = scope.view.value;
	                disable();
	            };
	            
	            // watch scope.view.enabled to see when the edit is triggered
	            scope.$watch(function(){ return scope.view.enabled }, function(){
	            	if( scope.view.enabled ){
	            		// set focus on the input control.
	            		// this will cause blur to fire if the hit tab, or if the click somewhere
	            		elem.find('input').focus()
	            	}
	            		
	            });
	        }
		}
		
	};// end directive
}); // end goog.scope