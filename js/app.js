var myApp = angular.module('myApp', [
    'ngRoute',
    'mediaControllers',
	'ngAnimate'
]);

myApp.config(['$routeProvider', function($routeProvider) {

    $routeProvider.
        otherwise( {
            templateUrl: 'partials/list.html',
            controller: "ListController"

        })

}]);