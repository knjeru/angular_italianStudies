(function() {

    'use strict';

    angular
        .module('app')
        .factory('UserService', UserService);

    UserService.$inject = ['$http'];

    function UserService($http) {

        var urlBase = '/api/users'
        var userApi = {};

        userApi.updateUser = function(id, body) {
            return $http.put(urlBase + '/' + id);
        };

        userApi.deleteUser = function(id) {
            return $http.delete(urlBase + '/' + id);
        };

        return userApi;
    }
})();