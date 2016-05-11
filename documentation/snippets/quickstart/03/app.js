app.controller('TodoController', function($scope, $wakandaManager) {
  $wakandaManager.getCatalog().then(function(ds) {
    /* ... */

    $scope.checkItem = function(item) {
      item.done = !item.done;
      item.$save();
    };
  });
});
