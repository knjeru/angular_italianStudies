(function(){

    'use strict';

    angular
        .module('app.auth')
        .config(config);

    config.$inject = ['$stateProvider', '$urlRouterProvider', '$httpProvider'];

    function config($stateProvider,$urlRouterProvider, $httpProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('login', {
                url: '/login',
                templateUrl: '/app/auth/views/login.html',
                controller: 'AuthCtrl',
                controllerAs: 'vm',
                css: '/styles/css/auth_forms.css'
            })
            .state('register', {
                url: '/',
                templateUrl: '/app/auth/views/register.html',
                controller: 'AuthCtrl',
                controllerAs: 'vm',
                css: '/styles/css/auth_forms.css'
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