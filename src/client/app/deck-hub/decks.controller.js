(function(){

    'use strict';

    angular
        .module('app.deck-hub')
        .controller('NewDeckCtrl', NewDeckCtrl);

    NewDeckCtrl.$inject = ['DeckService', 'CardService', '$stateParams', '$localStorage'];

    function NewDeckCtrl (DeckService, CardService ,$stateParams, $localStorage) {

        var uid = $localStorage.getItem('val');
        vm.deckFormData =

        vm.addDeck = function() {
            DeckService.addDeck(uid, vm.deckFormData)
                .then(function(data) {
                    CardService.addCard(data.id, vm.cardFormData)
                })
        }
    }
})();