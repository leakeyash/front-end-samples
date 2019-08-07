var angular = require('angular');

require('angular-ui-sortable');

module.exports = angular.module('app',['ui.sortable'])
.controller('testCtrl', function($scope){
    $scope.items = ['22','rewrewr','34324'];
});