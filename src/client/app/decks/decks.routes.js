(function() {

    'use strict';

    angular
        .module('app.decks')
        .config(config);

    config.$inject = ['$stateProvider', '$urlRouterProvider'];

    function config($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
        
        $stateProvider
            .state('newDeck', {
                url: '/newdeck',
                views: {
                    '': {
                        templateUrl: '/app/decks/views/form_deck.html'
                    },
                    'cards@newDeck': {
                        templateUrl: '/app/decks/views/form_card.html'
                    }
                },
                controller: 'NewDeckCtrl',
                controllerAs: 'vm'
            })
    }
})();