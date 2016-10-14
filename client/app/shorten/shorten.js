angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {};
  $scope.addLink = function(url) {
    if (!url) {
      console.log('Not a valid URL');
    }
    Links.addOne({url: url});
  };
});
