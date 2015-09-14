'use strict'; 
var app = angular.module('testapp', []);

app.controller('testCtrl', ['$scope', '$window', function($scope, $window) {

  $scope.list = [];

  $scope.clickButton = function() {
    if ($scope.list.indexOf($scope.input) === -1) {
      $scope.list.push($scope.input);  
    };    
    $scope.input = '';
  };

}]); 