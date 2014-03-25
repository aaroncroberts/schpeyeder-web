/*
 * 	Register new directives for use with AngularJS
 ***************************************************************************
 *	‘A’ – Attribute (You want to use your directive as <div foo>)
 *	‘E’ – Element 	(Use it as <foo>)
 *	‘C’ – Class 	(Use it like <div class=”foo”>)
 *	‘M’ – Comment 	(Use it like <!– directive: foo –>
 * 
 */
angular.module('schpeyeder-web.directives', [])
  	.directive('rating', function () {
  		return {
	      restrict: 'A',
	      // Template that will be used for the directive
	      template: '<ul class="rating">' +
	      				'<li ng-repeat="star in stars" ng-class="star" ng-click="toggle($index)">' +
	      					'\u2605' +
	      				'</li>' +
	      			'</ul>',
		/*
		 *  Variables that will be available on the directive 
		 * 	 = : object
	     *	 @ : string
	     *	 & : function
		 */	     
	      scope: {

	    	  ratingValue: '=',
	    	  max: '=',    	  
	    	  readonly: '@',
	    	  onRatingSelected: '&'
	      },    	      	 
	      link: function (scope, elem, attrs) {	    	   
	    	   // Create a function for updating the rating, this is not accessible on the template
	    	   var update = function() {
			      scope.stars = [];
			      for(var i = 0; i < scope.max; i++) {
			         scope.stars.push({filled: i < scope.ratingValue});
			      } 
	    	   };
	    	   
	    	   // Create a function on scope accessible in the template for click events
	    	   scope.toggle = function(index){
	    		   scope.ratingValue = index + 1;
	    		   
	    		   // Fire the event for Rating Selected
	    		   scope.onRatingSelected({newRating: index + 1});
	    	   };
	    	   
	    	   // Wire up a watch on the ratingValue, calling update when the value changes
	    	   scope.$watch('ratingValue', function(oldVal, newVal) {
	    		     if(newVal) {
	    		    	 update();
	    		     }
	    	   });
	    	   
	      	} // end link      
  		} // end return
  	}); // end directive