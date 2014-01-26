'use strict';

angular.module('ngFancyboxBasicApp')
  .controller('MainCtrl', function ($scope) {

  	$scope.fancyboxOption = {
		autoSize: false,
    	afterLoad: function() {
    		this.width = 400;
    		this.height = 400;
    	}
	};

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
