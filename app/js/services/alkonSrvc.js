"use strict";

var mod = angular.module("com.alkon.services", []);

mod.service("alkonSrvc", ["$http", "$q", function (http, q) {

    var defer = null;


    function success(data) {
        return defer.resolve(data);
    }

    function error(data) {
        return defer.reject(data);
    }

    /**
     * Returns array of states.
     * @method
     * @returns {promise|*}
     */
    this.getStates = function () {
        defer = q.defer();

        http.get("http://").success(success).error(error);

        return defer.promise;
    };

    /**
     * Returns array of cities for specified state.
     * @method
     * @param state {string}
     * @returns {promise|*}
     */
    this.getCities = function (state) {
        defer = q.defer();

        http.get("").success(success).error(error);

        return defer.promise;
    };

    /**
     * Returns object with city detail information.
     * @method
     * @param state {string}
     * @param city {string}
     * @returns {promise|*}
     */
    this.getCity = function (state, city) {
        defer = q.defer();

        http.get("").success(success).error(error);

        return defer.promise;
    };

}]);