(function() {

    'use strict';

    angular
        .module('app.dash')
        .directive('userDeck', userDeck);

    userDeck.$inject = [];

    function userDeck() {
        return {
            restrict: 'E',
            templateUrl: '/app/dashboard/views/deck.html'
        }
    }
})();