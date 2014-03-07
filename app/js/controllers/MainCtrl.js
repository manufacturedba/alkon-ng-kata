"use strict";

var mod = angular.module("com.alkon.controllers", []);

mod.controller("MainCtrl", ["$scope", "alkonSrvc", function (scope, alkon) {
    function disabled() {
        scope.disabled = (!scope.selectedState) ? true : false;
    }

    alkon.getStates().then(function (data) {
        scope.states = data;
    });

    scope.updateCities = function () {
        if (scope.selectedState) {
            alkon.getCities(scope.selectedState.state).then(function (data) {
                scope.cities = data;
            });
        }

        disabled();
    };

    scope.getDetail = function () {
        alkon.getCity(scope.selectedState.state, scope.selectedCity.city).then(function (data) {
            scope.city = data[0];
        });
    };

    disabled();
}]);