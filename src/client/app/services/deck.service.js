(function(){

    'use strict';

    angular
        .module('app')
        .factory('DeckService', DeckService);

    DeckService.$inject = ['$http'];

    function DeckService($http) {

        var urlBase = '/api/decks';
        var deckApi = {};

        deckApi.getDecks = function(id) {
            return $http.get(urlBase + '/' + id);
        };

        deckApi.getDeck = function(deck_id) {
            return $http.get(urlBase + '/deck/' + deck_id);
        };

        deckApi.addDeck = function(user_id, body) {
            return $http.post(urlBase + '/' + user_id, body);
        };

        deckApi.updateDeck = function(deck_id, body) {
            return $http.put(urlBase + '/' + deck_id, body);
        };
        
        deckApi.deleteDeck = function(deck_id) {
            return $http.delete(urlBase + '/' + deck_id);
        };


        return deckApi;
    }
})();