"use strict";

var app = angular.module("alkonkata", [
    "ngRoute",
    "ngAnimate",
    "com.alkon.services",
    "com.alkon.controllers"
]);

app.value("version", "0.9.1");

app.config(["$routeProvider", function (route) {
    route.when("/", {"templateUrl": "partials/partial1.html", "controller": "MainCtrl"});
}]);

app.run(function ($log, version) {
    $log.info("[+] Running alkon kata v%s".replace("%s", version));
});