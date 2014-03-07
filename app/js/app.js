"use strict";

var app = angular.module("alkonkata", [
    "ngRoute",
    "ngAnimate",
    "com.alkon.services",
    "com.alkon.controllers"
]);

app.value("version", "0.9.1");

app.config(["$routeProvider", "$httpProvider", function (route, http) {
    http.defaults.useXDomain = true;
    route.when("/", {"templateUrl": "partials/partial1.html", "controller": "MainCtrl"});
    delete http.defaults.headers.common['X-Requested-With'];
}]);

app.run(function ($log, version) {
    $log.info("[+] Running alkon kata v%s".replace("%s", version));
});