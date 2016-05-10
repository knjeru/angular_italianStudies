(function(){

    'use strict';

    angular
        .module('app.study-center')
        .config(config);

    config.$inject = ['$stateProvider', '$urlRouterProvider'];

    function config($stateProvider, $urlRouterProvider) {

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
            })
    }
})();