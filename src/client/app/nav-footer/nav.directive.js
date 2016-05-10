(function() {

    'use strict';

    angular
        .module('nav-footer')
        .directive('NavBar', NavBar)
        .controller('NavCtrl', NavCtrl);

    NavBar.$inject = [];
    NavCtrl.$inject = [];

    function NavBar() {
        return {
            restrict: 'E',
            templateUrl: '/app/nav-footer/views/nav.html',
            // controller: 'NavCtrl',
            // controllerAs: 'vm',
            // css: '/styles/css/navbar.css'
        }
    }

    function NavCtrl() {

    }
})();