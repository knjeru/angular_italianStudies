(function(){
    'use strict';

    angular
        .module('app.dash')
        .controller('DashCtrl', DashCtrl);

    DashCtrl.$inject = ['DeckService', '$localStorage'];

    function DashCtrl(DeckService, $localStorage) {
        var vm = this;
        var id = $localStorage.val;

        DeckService.getDecks(id)
            .then(function(data) {
                vm.userDecks = data.data;
            });
    }
})();