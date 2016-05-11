(function(){

    'use strict';

    angular
        .module('app.deck-hub')
        .controller('NewDeckCtrl', NewDeckCtrl);

    NewDeckCtrl.$inject = ['DeckService', 'CardService', '$localStorage'];

    function NewDeckCtrl (DeckService, CardService, $localStorage) {
        var vm = this;
        var id = $localStorage.val;
        vm.deckFormData = null;
        vm.cardFormData = null;

        vm.addDeck = function() {
            DeckService.addDeck(id, vm.deckFormData)
                .then(function(data) {
                    CardService.addCard(data.data.id, vm.cardFormData);
                });
        };

        vm.questions = [{id: 'question1'}, {id: 'question2'}];

        vm.addNewChoice = function() {
            var newItemNo = vm.questions.length+1;
            vm.questions.push({'id':'question'+newItemNo});
        };

        vm.removeChoice = function() {
            var lastItem = vm.questions.length-1;
            vm.questions.splice(lastItem);
        };
    }
})();