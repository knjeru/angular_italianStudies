(function() {
    'use strict';

    angular
        .module('app', [
            app.dash,
            app.auth,
            app.study-center,
            app.deck-hub,
            app.nav-footer
        ])
})();