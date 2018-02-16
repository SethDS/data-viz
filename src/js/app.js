/**
 * Created by Seth on 2/15/2018.
 */
angular.module('app', ['ui.router']).config(function($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: '../views/home.html',
            controller: 'homeCtrl'
        })
        .state('portrait', {
            url: "/portrait",
            templateUrl: "../views/portrait.html",
            controller: "portraitCtrl"
        });

});