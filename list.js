'use strict'; 
var app = angular.module('testapp', []);

app.controller('testCtrl', ['$scope', function($scope, $window) {

  $scope.list = [];

  $scope.clickButton = function() {    
    $scope.list.push($scope.input);
    $scope.input = '';
  };

}]); 