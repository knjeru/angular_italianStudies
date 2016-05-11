(function() {

    'use strict';

    angular
        .module('app')
        .factory('CardService', CardService);

    CardService.$inject = ['$http'];

    function CardService($http) {
        var urlBase = '/api/cards';
        var cardApi = {};

        cardApi.getCards = function(deck_id) {
            return $http.get(urlBase + '/' + deck_id);
        };

        cardApi.getCard = function(card_id) {
            return $http.get(urlBase + '/deck/' + card_id);
        };

        cardApi.addCard = function(deck_id, body) {
            return $http.post(urlBase + '/' + deck_id, body);
        };

        cardApi.updateCard = function(card_id, body) {
            return $http.put(urlBase + '/edit/' + card_id, body);
        };

        cardApi.answerCard = function(card_id, body) {
            return $http.put(urlBase + '/answer/' + card_id, body);
        };

        cardApi.deleteCard = function(card_id) {
            return $http.delete(urlBase + '/' + card_id);
        };

        return cardApi;
    }
})();