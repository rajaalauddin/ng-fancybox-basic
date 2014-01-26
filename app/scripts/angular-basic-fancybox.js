(function(){
	'use strict';
	angular.module('ra.fancyboxBasic', [])
	.directive('raFancyboxBasic', function() {
	    return {
	        restrict: 'A',
	        scope: {
	            fancyboxOption: '='
	        },
	        link: function(scope, elem, attrs) {
	            $(elem).fancybox(scope.fancyboxOption);
	            if(attrs.ngClick || attrs.href === '' || attrs.href === '#' || /#*/.test(attrs.href)){
	                elem.on('click', function(e){
	                    
	                    e.preventDefault();

	                    if(attrs.ngClick){
	                        scope.$eval(attrs.ngClick);
	                    }
	                });
	            }
	        }
	   };
	});
}());