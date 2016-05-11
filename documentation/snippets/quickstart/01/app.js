var app = angular.module('starter', ['wakanda'])
  .controller('TodoController', function($scope, $wakandaManager) {
    $wakandaManager.getCatalog().then(function (ds) {

      ds.Item.$all().$promise.then(function(event) {
        $scope.tasks = event.result;
      });
    });
  });
