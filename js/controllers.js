var mediaControllers = angular.module('mediaControllers', ['ngAnimate']);

mediaControllers.controller('ListController', ['$scope', '$http', function($scope, $http) {
    //controller for 'mediaControllers' which imports 'ListController'
    $http.get('https://itunes.apple.com/us/rss/topalbums/limit=100/json').success(function(data) {
        $scope.medias = data.feed.entry;
        $scope.mediaOrder = 'Number';
        //sets data to use in html partial
    });
}]);
