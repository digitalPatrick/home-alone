/**
 * Created by Leon on 10/10/2014.
 */
(function () {
    'user strict';

    var app = angular.module("app", [
        'ngRoute',
        'angularLoad'
    ]);
    
    app.config(function ($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);

        $routeProvider.when('/', {
            templateUrl: 'views/home.html',
            controller: 'homeCtrl as vm'
        })
         .when('/contact', {
            templateUrl: 'views/contact.html',
            controller: 'contactCtrl as vm'
        });

        $routeProvider.otherwise({redirectTo: '/'});
    })
})();