// Create the Closure namespace
goog.provide('schpeyeder.web.components.directives.grid')

goog.scope(function(){
		
	/**
	 * @ngInject
	 * @export
	 * @constructor
	 */
	schpeyeder.web.components.directives.grid = function($compile) {
				
		var getTemplate = function( data, columns ){

			// Template scaffold
			var wrapperOpen		= '<div class="container grid-container">';
			var tableOpen 		= '<table class="table table-striped table-hover">';
			var headerOpen 		= '<thead><tr>';
			var header			= '';
			var headerClose 	= '</tr></thead>';
			var bodyOpen 		= '<tbody>';
			var body			= '';
			var bodyClose 		= '</tbody>';
			var tableClose 		= '</table>';
			var wrapperClose	= '</div>';
			
			// Create header row
			header += '<th ng-repeat="column in gridColumns">{{column.display}}</th>';
		
			// Create the body rows
			body += '<tr class="form-group" ng-repeat="row in gridData | filter: search">';
			
			for( column in columns ){
				body += '<td editable edit-model="row.' + columns[column].key + '">' +
					'{{row.' + columns[column].key + '}}</td>';
			}
			
			// close the row			
			body += '</tr>';
			
			// Build the template
			var template = 	wrapperOpen + 
							tableOpen + 
							headerOpen + header + headerClose + 
							bodyOpen + body + bodyClose + 
							tableClose + 
							wrapperClose; 
			
			return template;			
		};
		
		return{
			restrict: 'E',
			replace: true,
			//templateUrl: '/app/components/directives/grid.template.html',    					
			scope: 
			{		
				gridData : '=',
				gridColumns : '='
			},
			link : function(scope, elem, attrs){
				
				// Build the template
				elem.html(getTemplate(scope.gridData, scope.gridColumns)).show();
				
				// Compile the template
				$compile(elem.contents())(scope);
				
				/**
				 * @export
				 */
				scope.toggle = function(elem){
					alert('tripped');
					alert(elem);
				};
			}
		}
		
	};// end directive
}); // end goog.scope