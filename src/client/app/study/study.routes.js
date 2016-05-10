(function(){

    'use strict';

    angular
        .module('app.study-center')
        .config(config);

    config.$inject = ['$stateProvider', '$urlRouterProvider', '$httpProvider'];

    function config($stateProvider, $urlRouterProvider, $httpProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('allDecks', {
                url: '/study/decks/:id',
                views: {
                    '': {
                        templateUrl: '/app/study/views/main.html'
                    },
                    'preview@allDecks': {
                        templateUrl: '/app/study/views/preview_deck.html'
                    }
                },
                controller: 'SingleDeckCtrl',
                controllerAs: 'vm'
            })
            .state('study', {
                url: '/study/:id/quiz',
                views: {
                    '': {
                        templateUrl: '/app/study/views/quiz_main.html'
                    },
                    'questions@study': {
                        templateUrl: '/app/study/views/questions.html'
                    },
                    'answers@study': {
                        templateUrl: '/app/study/views/answers.html'
                    }
                },
                controller: 'StudyCtrl',
                controllerAs: 'vm'
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