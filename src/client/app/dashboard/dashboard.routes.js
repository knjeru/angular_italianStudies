(function(){

    'use strict';

    angular
        .module('app.dashboard')
        .config(config)

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
                        templateUrl: '/app/dashbboard/views/decks.html'
                    },
                    'notifications@home': {
                        templateUrl: '/app/dashboard/views/notifications.html'
                    }
                },
                controller: 'DashCtrl',
                controllerAs: 'vm'
            })
    }
})();