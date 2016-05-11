(function() {

    'use strict';

    angular
        .module('app.deck-hub')
        .config(config);

    config.$inject = ['$stateProvider', '$urlRouterProvider', '$httpProvider'];

    function config($stateProvider, $urlRouterProvider, $httpProvider) {
        $urlRouterProvider.otherwise('/');
        
        $stateProvider
            .state('newDeck', {
                url: '/newdeck',
                views: {
                    '': {
                        templateUrl: '/app/deck-hub/views/form_deck.html',
                        controller: 'NewDeckCtrl',
                        controllerAs: 'vm'
                    },
                    'cards@newDeck': {
                        templateUrl: '/app/deck-hub/views/form_card.html'
                    }
                },
                css: '/styles/css/deck_forms.css'
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