angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // $scope.link = {};
  $scope.addLink = function() {
    console.log($scope.link);
    if (!$scope.link) {
      console.log('Not a valid URL');
    } else {
      Links.addOne({url: $scope.link});
    }
  };
});
