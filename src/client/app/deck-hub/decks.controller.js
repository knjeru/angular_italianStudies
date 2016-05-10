(function(){

    'use strict';

    angular
        .module('app.deck-hub')
        .controller('NewDeckCtrl', NewDeckCtrl);

    NewDeckCtrl.$inject = ['DeckService', 'CardService', '$stateParams', '$localStorage'];

    function NewDeckCtrl (DeckService, CardService ,$stateParams, $localStorage) {

        var userId = $localStorage.getItem('UUID');
        vm.deckFormData =

        vm.addDeck = function() {
            DeckService.addDeck(userId, vm.deckFormData)
                .then(function(data) {
                    CardService.addCard(data.id, vm.cardFormData)
                })
        }
    }
})();