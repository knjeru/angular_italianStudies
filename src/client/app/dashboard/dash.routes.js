(function(){

    'use strict';

    angular
        .module('app.dashboard')
        .config(config);

    config.$inject = ['$stateProvider','$urlRouterProvider'];

    function config($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('dashboard', {
                url: '/home',
                views: {
                    '': {
                        templateUrl: '/app/dashboard/views/main.html'
                    },
                    'mydecks@home': {
                        templateUrl: '/app/dashboard/views/decks.html'
                    },
                    'notifications@home': {
                        templateUrl: '/app/dashboard/views/notifications.html'
                    }
                },
                controller: 'DashCtrl',
                controllerAs: 'vm'
            });

        $httpProvider
            .interceptors.push(['$q', '$location', '$localStorage', function ($q, $location, $localStorage) {

            return {
                'request': function (config) {
                    config.headers = config.headers || {};
                    if ($localStorage.token) {
                        config.headers['x-access-token'] = $localStorage.token;
                    }
                    return config;
                },
                'responseError': function (response) {
                    if (response.status === 401 || response.status === 403) {
                        $location.path('/login');
                    }
                    return $q.reject(response);
                }
            };
        }]);
    }
})();