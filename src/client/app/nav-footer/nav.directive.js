(function() {

    'use strict';

    angular
        .module('app.nav-footer')
        .directive('navBar', navBar)
        .controller('NavCtrl', NavCtrl);

    navBar.$inject = [];
    NavCtrl.$inject = [];

    function navBar() {
        return {
            restrict: 'E',
            templateUrl: '/app/nav-footer/views/nav.html',
            css: '/styles/css/nav.css'
        }
    }

    function NavCtrl() {

    }
})();