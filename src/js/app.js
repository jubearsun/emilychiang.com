var app = angular.module('emily', [
        'ui.router',
        'ngTouch'
    ]);

app.run([
    '$rootScope',
    '$state',
    '$stateParams',
    function ($rootScope, $state, $stateParams) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
    }
]);

app.config(['$stateProvider',
    '$urlRouterProvider',
    '$locationProvider',
    function($stateProvider, $urlRouterProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        $urlRouterProvider.otherwise("/");

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: './views/home.html',
                data: {
                    pageTitle: 'Home | Emily Chiang Real Estate'
                }
            })
            .state('about', {
                url: '/about',
                templateUrl: './views/about.html',
                data: {
                    pageTitle: 'About | Emily Chiang Real Estate'
                }
            })
            .state('testimonials', {
                url: '/testimonials',
                templateUrl: './views/testimonials.html',
                data: {
                    pageTitle: 'Testimonials | Emily Chiang Real Estate'
                }
            })
            .state('contact', {
                url: '/contact',
                templateUrl: './views/contact.html',
                data: {
                    pageTitle: 'Contact | Emily Chiang Real Estate'
                }
            })
            .state('buyers', {
                url: '/buyers',
                templateUrl: './views/buyers.html',
                data: {
                    pageTitle: 'Buyers | Emily Chiang Real Estate'
                }
            })
            .state('sellers', {
                url: '/sellers',
                templateUrl: './views/sellers.html',
                data: {
                    pageTitle: 'Sellers | Emily Chiang Real Estate'
                }
            })
            .state('listings', {
                url: '/listings',
                templateUrl: './views/listings.html',
                data: {
                    pageTitle: 'Listings | Emily Chiang Real Estate'
                }
            })
            .state('statistics', {
                url: '/statistics',
                templateUrl: './views/statistics.html',
                data: {
                    pageTitle: 'Statistics | Emily Chiang Real Estate'
                }
            });
    }
]);
