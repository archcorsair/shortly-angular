angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // $scope.link = {};
  $location.path('/shorten');
  $scope.addLink = function() {
    console.log($scope.link);
    if (!$scope.link) {
      // alert('Not a valid URL!!!!!!!!!!!!!!!');
      console.log('Not a valid url!!!!!!!!!');
    } else {
      Links.addOne({url: $scope.link});
    }
  };
});
