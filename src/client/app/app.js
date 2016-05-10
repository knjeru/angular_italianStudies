(function() {
    'use strict';

    angular
        .module('app', [
            app.dashboard,
            app.auth,
            app.study-center,
            app.deck-creation
        ])
})();