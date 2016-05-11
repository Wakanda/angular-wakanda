app.controller('TodoController', function($scope, $wakandaManager) {
  $wakandaManager.getCatalog().then(function(ds) {
    /* ... */

    $scope.deleteItem = function(item) {
      var index = $scope.tasks.indexOf(item);
      item.$remove().$promise.then(function() {
        $scope.tasks.splice(index, 1);
      });
    };
  });
});
