angular.module('shortly.links', [])

.controller('LinksController', function ($scope, $location, Links) {
  $scope.data = {};
  Links.getAll().then(function(links) {
    $scope.data.links = links;
  });
  $location.path('/links');
});
