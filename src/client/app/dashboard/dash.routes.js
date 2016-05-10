(function(){

    'use strict';

    angular
        .module('app.dash')
        .config(config);

    config.$inject = ['$stateProvider','$urlRouterProvider', '$httpProvider'];

    function config($stateProvider, $urlRouterProvider, $httpProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('dashboard', {
                url: '/home',
                views: {
                    '': {
                        templateUrl: '/app/dashboard/views/main.html'
                    },
                    'mydecks@dashboard': {
                        templateUrl: '/app/dashboard/views/user-decks.html'
                    },
                    'notifications@dashboard': {
                        templateUrl: '/app/dashboard/views/notifications.html'
                    }
                },
                controller: 'DashCtrl',
                controllerAs: 'vm',
                css: '/styles/css/dashboard.css'
            });

        // $httpProvider
        //     .interceptors.push(['$q', '$location', '$localStorage', function ($q, $location, $localStorage) {
        //
        //     return {
        //         'request': function (config) {
        //             config.headers = config.headers || {};
        //             if ($localStorage.token) {
        //                 config.headers['x-access-token'] = $localStorage.token;
        //             }
        //             return config;
        //         },
        //         'responseError': function (response) {
        //             if (response.status === 401 || response.status === 403) {
        //                 $location.path('/login');
        //             }
        //             return $q.reject(response);
        //         }
        //     };
        // }]);
    }
})();