/**
 * OffreApp - 0.0.1
 */
'use strict';

var app = angular.module('OffreApp', ['ui.calendar', 'ui.bootstrap', 'ngRoute', 'ngResource', 'ngAnimate']);

app.config(['$routeProvider', function($routeProvider){

  $routeProvider
  .when('/',     {templateUrl: 'views/calendar.html', view: 'mainContainer', controller: 'OffreCtrl'})
  .when('/tutorial', {templateUrl: 'views/tutorial.html', view: 'mainContainer', controller: 'TutorialCtrl'})
  .when('/main', {templateUrl: 'views/main.html', view: 'mainContainer', controller: 'OffreCtrl'})
  .otherwise({redirectTo: '/404'});
}]);

app.controller('OffreCtrl', ['PubFactory', 'PeriodFactory', '$scope', 'CODE', 'DAYS_OF_WEEK',
  function CalendarCtrl(PubFactory, PeriodFactory, $scope, CODE, DAYS_OF_WEEK) {
                             
    /* Initialisation des constantes */
    $scope.daysOfWeek = DAYS_OF_WEEK;
      
    var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();
    
    $scope.changeTo = CODE.LANGUAGE;

    /* event source that pulls from google.com */
    $scope.eventSource = {
            url: "http://www.google.com/calendar/feeds/usa__en%40holiday.calendar.google.com/public/basic",
            className: 'gcal-event',           // an option!
            currentTimezone: 'America/Chicago' // an option!
    };

    /* Initialisation des factories */
    // $scope.grid = PeriodFactory.getGrid();
    $scope.events = PubFactory.getSpotList();
    var grid = {"800":{"Lundi":[{"title":"Ecran Lundi 800","duration":10,"spots":[{"title":"Spot Lundi 800 0","duration":10},{"title":"Spot Lundi 800 1","duration":10},{"title":"Spot Lundi 800 2","duration":10},{"title":"Spot Lundi 800 3","duration":10}]}],"Mardi":[{"title":"Ecran Mardi 800","duration":10,"spots":[{"title":"Spot Mardi 800 0","duration":10},{"title":"Spot Mardi 800 1","duration":10},{"title":"Spot Mardi 800 2","duration":10},{"title":"Spot Mardi 800 3","duration":10}]}],"Mercredi":[{"title":"Ecran Mercredi 800","duration":10,"spots":[{"title":"Spot Mercredi 800 0","duration":10},{"title":"Spot Mercredi 800 1","duration":10},{"title":"Spot Mercredi 800 2","duration":10},{"title":"Spot Mercredi 800 3","duration":10}]}],"Jeudi":[{"title":"Ecran Jeudi 800","duration":10,"spots":[{"title":"Spot Jeudi 800 0","duration":10},{"title":"Spot Jeudi 800 1","duration":10},{"title":"Spot Jeudi 800 2","duration":10},{"title":"Spot Jeudi 800 3","duration":10}]}],"Vendredi":[{"title":"Ecran Vendredi 800","duration":10,"spots":[{"title":"Spot Vendredi 800 0","duration":10},{"title":"Spot Vendredi 800 1","duration":10},{"title":"Spot Vendredi 800 2","duration":10},{"title":"Spot Vendredi 800 3","duration":10}]}],"Samedi":[{"title":"Ecran Samedi 800","duration":10,"spots":[{"title":"Spot Samedi 800 0","duration":10},{"title":"Spot Samedi 800 1","duration":10},{"title":"Spot Samedi 800 2","duration":10},{"title":"Spot Samedi 800 3","duration":10}]}],"Dimanche":[{"title":"Ecran Dimanche 800","duration":10,"spots":[{"title":"Spot Dimanche 800 0","duration":10},{"title":"Spot Dimanche 800 1","duration":10},{"title":"Spot Dimanche 800 2","duration":10},{"title":"Spot Dimanche 800 3","duration":10}]}]},"1230":{"Lundi":[{"title":"Ecran Lundi 1230","duration":10,"spots":[{"title":"Spot Lundi 1230 0","duration":10},{"title":"Spot Lundi 1230 1","duration":10},{"title":"Spot Lundi 1230 2","duration":10},{"title":"Spot Lundi 1230 3","duration":10}]}],"Mardi":[{"title":"Ecran Mardi 1230","duration":10,"spots":[{"title":"Spot Mardi 1230 0","duration":10},{"title":"Spot Mardi 1230 1","duration":10},{"title":"Spot Mardi 1230 2","duration":10},{"title":"Spot Mardi 1230 3","duration":10}]}],"Mercredi":[{"title":"Ecran Mercredi 1230","duration":10,"spots":[{"title":"Spot Mercredi 1230 0","duration":10},{"title":"Spot Mercredi 1230 1","duration":10},{"title":"Spot Mercredi 1230 2","duration":10},{"title":"Spot Mercredi 1230 3","duration":10}]}],"Jeudi":[{"title":"Ecran Jeudi 1230","duration":10,"spots":[{"title":"Spot Jeudi 1230 0","duration":10},{"title":"Spot Jeudi 1230 1","duration":10},{"title":"Spot Jeudi 1230 2","duration":10},{"title":"Spot Jeudi 1230 3","duration":10}]}],"Vendredi":[{"title":"Ecran Vendredi 1230","duration":10,"spots":[{"title":"Spot Vendredi 1230 0","duration":10},{"title":"Spot Vendredi 1230 1","duration":10},{"title":"Spot Vendredi 1230 2","duration":10},{"title":"Spot Vendredi 1230 3","duration":10}]}],"Samedi":[{"title":"Ecran Samedi 1230","duration":10,"spots":[{"title":"Spot Samedi 1230 0","duration":10},{"title":"Spot Samedi 1230 1","duration":10},{"title":"Spot Samedi 1230 2","duration":10},{"title":"Spot Samedi 1230 3","duration":10}]}],"Dimanche":[{"title":"Ecran Dimanche 1230","duration":10,"spots":[{"title":"Spot Dimanche 1230 0","duration":10},{"title":"Spot Dimanche 1230 1","duration":10},{"title":"Spot Dimanche 1230 2","duration":10},{"title":"Spot Dimanche 1230 3","duration":10}]}]},"1255":{"Lundi":[{"title":"Ecran Lundi 1255","duration":10,"spots":[{"title":"Spot Lundi 1255 0","duration":10},{"title":"Spot Lundi 1255 1","duration":10},{"title":"Spot Lundi 1255 2","duration":10},{"title":"Spot Lundi 1255 3","duration":10}]}],"Mardi":[{"title":"Ecran Mardi 1255","duration":10,"spots":[{"title":"Spot Mardi 1255 0","duration":10},{"title":"Spot Mardi 1255 1","duration":10},{"title":"Spot Mardi 1255 2","duration":10},{"title":"Spot Mardi 1255 3","duration":10}]}],"Mercredi":[{"title":"Ecran Mercredi 1255","duration":10,"spots":[{"title":"Spot Mercredi 1255 0","duration":10},{"title":"Spot Mercredi 1255 1","duration":10},{"title":"Spot Mercredi 1255 2","duration":10},{"title":"Spot Mercredi 1255 3","duration":10}]}],"Jeudi":[{"title":"Ecran Jeudi 1255","duration":10,"spots":[{"title":"Spot Jeudi 1255 0","duration":10},{"title":"Spot Jeudi 1255 1","duration":10},{"title":"Spot Jeudi 1255 2","duration":10},{"title":"Spot Jeudi 1255 3","duration":10}]}],"Vendredi":[{"title":"Ecran Vendredi 1255","duration":10,"spots":[{"title":"Spot Vendredi 1255 0","duration":10},{"title":"Spot Vendredi 1255 1","duration":10},{"title":"Spot Vendredi 1255 2","duration":10},{"title":"Spot Vendredi 1255 3","duration":10}]}],"Samedi":[{"title":"Ecran Samedi 1255","duration":10,"spots":[{"title":"Spot Samedi 1255 0","duration":10},{"title":"Spot Samedi 1255 1","duration":10},{"title":"Spot Samedi 1255 2","duration":10},{"title":"Spot Samedi 1255 3","duration":10}]}],"Dimanche":[{"title":"Ecran Dimanche 1255","duration":10,"spots":[{"title":"Spot Dimanche 1255 0","duration":10},{"title":"Spot Dimanche 1255 1","duration":10},{"title":"Spot Dimanche 1255 2","duration":10},{"title":"Spot Dimanche 1255 3","duration":10}]}]},"1305":{"Lundi":[{"title":"Ecran Lundi 1305","duration":10,"spots":[{"title":"Spot Lundi 1305 0","duration":10},{"title":"Spot Lundi 1305 1","duration":10},{"title":"Spot Lundi 1305 2","duration":10},{"title":"Spot Lundi 1305 3","duration":10}]}],"Mardi":[{"title":"Ecran Mardi 1305","duration":10,"spots":[{"title":"Spot Mardi 1305 0","duration":10},{"title":"Spot Mardi 1305 1","duration":10},{"title":"Spot Mardi 1305 2","duration":10},{"title":"Spot Mardi 1305 3","duration":10}]}],"Mercredi":[{"title":"Ecran Mercredi 1305","duration":10,"spots":[{"title":"Spot Mercredi 1305 0","duration":10},{"title":"Spot Mercredi 1305 1","duration":10},{"title":"Spot Mercredi 1305 2","duration":10},{"title":"Spot Mercredi 1305 3","duration":10}]}],"Jeudi":[{"title":"Ecran Jeudi 1305","duration":10,"spots":[{"title":"Spot Jeudi 1305 0","duration":10},{"title":"Spot Jeudi 1305 1","duration":10},{"title":"Spot Jeudi 1305 2","duration":10},{"title":"Spot Jeudi 1305 3","duration":10}]}],"Vendredi":[{"title":"Ecran Vendredi 1305","duration":10,"spots":[{"title":"Spot Vendredi 1305 0","duration":10},{"title":"Spot Vendredi 1305 1","duration":10},{"title":"Spot Vendredi 1305 2","duration":10},{"title":"Spot Vendredi 1305 3","duration":10}]}],"Samedi":[{"title":"Ecran Samedi 1305","duration":10,"spots":[{"title":"Spot Samedi 1305 0","duration":10},{"title":"Spot Samedi 1305 1","duration":10},{"title":"Spot Samedi 1305 2","duration":10},{"title":"Spot Samedi 1305 3","duration":10}]}],"Dimanche":[{"title":"Ecran Dimanche 1305","duration":10,"spots":[{"title":"Spot Dimanche 1305 0","duration":10},{"title":"Spot Dimanche 1305 1","duration":10},{"title":"Spot Dimanche 1305 2","duration":10},{"title":"Spot Dimanche 1305 3","duration":10}]}]},"1500":{"Lundi":[{"title":"Ecran Lundi 1500","duration":10,"spots":[{"title":"Spot Lundi 1500 0","duration":10},{"title":"Spot Lundi 1500 1","duration":10},{"title":"Spot Lundi 1500 2","duration":10},{"title":"Spot Lundi 1500 3","duration":10}]}],"Mardi":[{"title":"Ecran Mardi 1500","duration":10,"spots":[{"title":"Spot Mardi 1500 0","duration":10},{"title":"Spot Mardi 1500 1","duration":10},{"title":"Spot Mardi 1500 2","duration":10},{"title":"Spot Mardi 1500 3","duration":10}]}],"Mercredi":[{"title":"Ecran Mercredi 1500","duration":10,"spots":[{"title":"Spot Mercredi 1500 0","duration":10},{"title":"Spot Mercredi 1500 1","duration":10},{"title":"Spot Mercredi 1500 2","duration":10},{"title":"Spot Mercredi 1500 3","duration":10}]}],"Jeudi":[{"title":"Ecran Jeudi 1500","duration":10,"spots":[{"title":"Spot Jeudi 1500 0","duration":10},{"title":"Spot Jeudi 1500 1","duration":10},{"title":"Spot Jeudi 1500 2","duration":10},{"title":"Spot Jeudi 1500 3","duration":10}]}],"Vendredi":[{"title":"Ecran Vendredi 1500","duration":10,"spots":[{"title":"Spot Vendredi 1500 0","duration":10},{"title":"Spot Vendredi 1500 1","duration":10},{"title":"Spot Vendredi 1500 2","duration":10},{"title":"Spot Vendredi 1500 3","duration":10}]}],"Samedi":[{"title":"Ecran Samedi 1500","duration":10,"spots":[{"title":"Spot Samedi 1500 0","duration":10},{"title":"Spot Samedi 1500 1","duration":10},{"title":"Spot Samedi 1500 2","duration":10},{"title":"Spot Samedi 1500 3","duration":10}]}],"Dimanche":[{"title":"Ecran Dimanche 1500","duration":10,"spots":[{"title":"Spot Dimanche 1500 0","duration":10},{"title":"Spot Dimanche 1500 1","duration":10},{"title":"Spot Dimanche 1500 2","duration":10},{"title":"Spot Dimanche 1500 3","duration":10}]}]},"1625":{"Lundi":[{"title":"Ecran Lundi 1625","duration":10,"spots":[{"title":"Spot Lundi 1625 0","duration":10},{"title":"Spot Lundi 1625 1","duration":10},{"title":"Spot Lundi 1625 2","duration":10},{"title":"Spot Lundi 1625 3","duration":10}]}],"Mardi":[{"title":"Ecran Mardi 1625","duration":10,"spots":[{"title":"Spot Mardi 1625 0","duration":10},{"title":"Spot Mardi 1625 1","duration":10},{"title":"Spot Mardi 1625 2","duration":10},{"title":"Spot Mardi 1625 3","duration":10}]}],"Mercredi":[{"title":"Ecran Mercredi 1625","duration":10,"spots":[{"title":"Spot Mercredi 1625 0","duration":10},{"title":"Spot Mercredi 1625 1","duration":10},{"title":"Spot Mercredi 1625 2","duration":10},{"title":"Spot Mercredi 1625 3","duration":10}]}],"Jeudi":[{"title":"Ecran Jeudi 1625","duration":10,"spots":[{"title":"Spot Jeudi 1625 0","duration":10},{"title":"Spot Jeudi 1625 1","duration":10},{"title":"Spot Jeudi 1625 2","duration":10},{"title":"Spot Jeudi 1625 3","duration":10}]}],"Vendredi":[{"title":"Ecran Vendredi 1625","duration":10,"spots":[{"title":"Spot Vendredi 1625 0","duration":10},{"title":"Spot Vendredi 1625 1","duration":10},{"title":"Spot Vendredi 1625 2","duration":10},{"title":"Spot Vendredi 1625 3","duration":10}]}],"Samedi":[{"title":"Ecran Samedi 1625","duration":10,"spots":[{"title":"Spot Samedi 1625 0","duration":10},{"title":"Spot Samedi 1625 1","duration":10},{"title":"Spot Samedi 1625 2","duration":10},{"title":"Spot Samedi 1625 3","duration":10}]}],"Dimanche":[{"title":"Ecran Dimanche 1625","duration":10,"spots":[{"title":"Spot Dimanche 1625 0","duration":10},{"title":"Spot Dimanche 1625 1","duration":10},{"title":"Spot Dimanche 1625 2","duration":10},{"title":"Spot Dimanche 1625 3","duration":10}]}]},"1735":{"Lundi":[{"title":"Ecran Lundi 1735","duration":10,"spots":[{"title":"Spot Lundi 1735 0","duration":10},{"title":"Spot Lundi 1735 1","duration":10},{"title":"Spot Lundi 1735 2","duration":10},{"title":"Spot Lundi 1735 3","duration":10}]}],"Mardi":[{"title":"Ecran Mardi 1735","duration":10,"spots":[{"title":"Spot Mardi 1735 0","duration":10},{"title":"Spot Mardi 1735 1","duration":10},{"title":"Spot Mardi 1735 2","duration":10},{"title":"Spot Mardi 1735 3","duration":10}]}],"Mercredi":[{"title":"Ecran Mercredi 1735","duration":10,"spots":[{"title":"Spot Mercredi 1735 0","duration":10},{"title":"Spot Mercredi 1735 1","duration":10},{"title":"Spot Mercredi 1735 2","duration":10},{"title":"Spot Mercredi 1735 3","duration":10}]}],"Jeudi":[{"title":"Ecran Jeudi 1735","duration":10,"spots":[{"title":"Spot Jeudi 1735 0","duration":10},{"title":"Spot Jeudi 1735 1","duration":10},{"title":"Spot Jeudi 1735 2","duration":10},{"title":"Spot Jeudi 1735 3","duration":10}]}],"Vendredi":[{"title":"Ecran Vendredi 1735","duration":10,"spots":[{"title":"Spot Vendredi 1735 0","duration":10},{"title":"Spot Vendredi 1735 1","duration":10},{"title":"Spot Vendredi 1735 2","duration":10},{"title":"Spot Vendredi 1735 3","duration":10}]}],"Samedi":[{"title":"Ecran Samedi 1735","duration":10,"spots":[{"title":"Spot Samedi 1735 0","duration":10},{"title":"Spot Samedi 1735 1","duration":10},{"title":"Spot Samedi 1735 2","duration":10},{"title":"Spot Samedi 1735 3","duration":10}]}],"Dimanche":[{"title":"Ecran Dimanche 1735","duration":10,"spots":[{"title":"Spot Dimanche 1735 0","duration":10},{"title":"Spot Dimanche 1735 1","duration":10},{"title":"Spot Dimanche 1735 2","duration":10},{"title":"Spot Dimanche 1735 3","duration":10}]}]},"1800":{"Lundi":[{"title":"Ecran Lundi 1800","duration":10,"spots":[{"title":"Spot Lundi 1800 0","duration":10},{"title":"Spot Lundi 1800 1","duration":10},{"title":"Spot Lundi 1800 2","duration":10},{"title":"Spot Lundi 1800 3","duration":10}]}],"Mardi":[{"title":"Ecran Mardi 1800","duration":10,"spots":[{"title":"Spot Mardi 1800 0","duration":10},{"title":"Spot Mardi 1800 1","duration":10},{"title":"Spot Mardi 1800 2","duration":10},{"title":"Spot Mardi 1800 3","duration":10}]}],"Mercredi":[{"title":"Ecran Mercredi 1800","duration":10,"spots":[{"title":"Spot Mercredi 1800 0","duration":10},{"title":"Spot Mercredi 1800 1","duration":10},{"title":"Spot Mercredi 1800 2","duration":10},{"title":"Spot Mercredi 1800 3","duration":10}]}],"Jeudi":[{"title":"Ecran Jeudi 1800","duration":10,"spots":[{"title":"Spot Jeudi 1800 0","duration":10},{"title":"Spot Jeudi 1800 1","duration":10},{"title":"Spot Jeudi 1800 2","duration":10},{"title":"Spot Jeudi 1800 3","duration":10}]}],"Vendredi":[{"title":"Ecran Vendredi 1800","duration":10,"spots":[{"title":"Spot Vendredi 1800 0","duration":10},{"title":"Spot Vendredi 1800 1","duration":10},{"title":"Spot Vendredi 1800 2","duration":10},{"title":"Spot Vendredi 1800 3","duration":10}]}],"Samedi":[{"title":"Ecran Samedi 1800","duration":10,"spots":[{"title":"Spot Samedi 1800 0","duration":10},{"title":"Spot Samedi 1800 1","duration":10},{"title":"Spot Samedi 1800 2","duration":10},{"title":"Spot Samedi 1800 3","duration":10}]}],"Dimanche":[{"title":"Ecran Dimanche 1800","duration":10,"spots":[{"title":"Spot Dimanche 1800 0","duration":10},{"title":"Spot Dimanche 1800 1","duration":10},{"title":"Spot Dimanche 1800 2","duration":10},{"title":"Spot Dimanche 1800 3","duration":10}]}]},"1830":{"Lundi":[{"title":"Ecran Lundi 1830","duration":10,"spots":[{"title":"Spot Lundi 1830 0","duration":10},{"title":"Spot Lundi 1830 1","duration":10},{"title":"Spot Lundi 1830 2","duration":10},{"title":"Spot Lundi 1830 3","duration":10}]}],"Mardi":[{"title":"Ecran Mardi 1830","duration":10,"spots":[{"title":"Spot Mardi 1830 0","duration":10},{"title":"Spot Mardi 1830 1","duration":10},{"title":"Spot Mardi 1830 2","duration":10},{"title":"Spot Mardi 1830 3","duration":10}]}],"Mercredi":[{"title":"Ecran Mercredi 1830","duration":10,"spots":[{"title":"Spot Mercredi 1830 0","duration":10},{"title":"Spot Mercredi 1830 1","duration":10},{"title":"Spot Mercredi 1830 2","duration":10},{"title":"Spot Mercredi 1830 3","duration":10}]}],"Jeudi":[{"title":"Ecran Jeudi 1830","duration":10,"spots":[{"title":"Spot Jeudi 1830 0","duration":10},{"title":"Spot Jeudi 1830 1","duration":10},{"title":"Spot Jeudi 1830 2","duration":10},{"title":"Spot Jeudi 1830 3","duration":10}]}],"Vendredi":[{"title":"Ecran Vendredi 1830","duration":10,"spots":[{"title":"Spot Vendredi 1830 0","duration":10},{"title":"Spot Vendredi 1830 1","duration":10},{"title":"Spot Vendredi 1830 2","duration":10},{"title":"Spot Vendredi 1830 3","duration":10}]}],"Samedi":[{"title":"Ecran Samedi 1830","duration":10,"spots":[{"title":"Spot Samedi 1830 0","duration":10},{"title":"Spot Samedi 1830 1","duration":10},{"title":"Spot Samedi 1830 2","duration":10},{"title":"Spot Samedi 1830 3","duration":10}]}],"Dimanche":[{"title":"Ecran Dimanche 1830","duration":10,"spots":[{"title":"Spot Dimanche 1830 0","duration":10},{"title":"Spot Dimanche 1830 1","duration":10},{"title":"Spot Dimanche 1830 2","duration":10},{"title":"Spot Dimanche 1830 3","duration":10}]}]},"1900":{"Lundi":[{"title":"Ecran Lundi 1900","duration":10,"spots":[{"title":"Spot Lundi 1900 0","duration":10},{"title":"Spot Lundi 1900 1","duration":10},{"title":"Spot Lundi 1900 2","duration":10},{"title":"Spot Lundi 1900 3","duration":10}]}],"Mardi":[{"title":"Ecran Mardi 1900","duration":10,"spots":[{"title":"Spot Mardi 1900 0","duration":10},{"title":"Spot Mardi 1900 1","duration":10},{"title":"Spot Mardi 1900 2","duration":10},{"title":"Spot Mardi 1900 3","duration":10}]}],"Mercredi":[{"title":"Ecran Mercredi 1900","duration":10,"spots":[{"title":"Spot Mercredi 1900 0","duration":10},{"title":"Spot Mercredi 1900 1","duration":10},{"title":"Spot Mercredi 1900 2","duration":10},{"title":"Spot Mercredi 1900 3","duration":10}]}],"Jeudi":[{"title":"Ecran Jeudi 1900","duration":10,"spots":[{"title":"Spot Jeudi 1900 0","duration":10},{"title":"Spot Jeudi 1900 1","duration":10},{"title":"Spot Jeudi 1900 2","duration":10},{"title":"Spot Jeudi 1900 3","duration":10}]}],"Vendredi":[{"title":"Ecran Vendredi 1900","duration":10,"spots":[{"title":"Spot Vendredi 1900 0","duration":10},{"title":"Spot Vendredi 1900 1","duration":10},{"title":"Spot Vendredi 1900 2","duration":10},{"title":"Spot Vendredi 1900 3","duration":10}]}],"Samedi":[{"title":"Ecran Samedi 1900","duration":10,"spots":[{"title":"Spot Samedi 1900 0","duration":10},{"title":"Spot Samedi 1900 1","duration":10},{"title":"Spot Samedi 1900 2","duration":10},{"title":"Spot Samedi 1900 3","duration":10}]}],"Dimanche":[{"title":"Ecran Dimanche 1900","duration":10,"spots":[{"title":"Spot Dimanche 1900 0","duration":10},{"title":"Spot Dimanche 1900 1","duration":10},{"title":"Spot Dimanche 1900 2","duration":10},{"title":"Spot Dimanche 1900 3","duration":10}]}]},"1930":{"Lundi":[{"title":"Ecran Lundi 1930","duration":10,"spots":[{"title":"Spot Lundi 1930 0","duration":10},{"title":"Spot Lundi 1930 1","duration":10},{"title":"Spot Lundi 1930 2","duration":10},{"title":"Spot Lundi 1930 3","duration":10}]}],"Mardi":[{"title":"Ecran Mardi 1930","duration":10,"spots":[{"title":"Spot Mardi 1930 0","duration":10},{"title":"Spot Mardi 1930 1","duration":10},{"title":"Spot Mardi 1930 2","duration":10},{"title":"Spot Mardi 1930 3","duration":10}]}],"Mercredi":[{"title":"Ecran Mercredi 1930","duration":10,"spots":[{"title":"Spot Mercredi 1930 0","duration":10},{"title":"Spot Mercredi 1930 1","duration":10},{"title":"Spot Mercredi 1930 2","duration":10},{"title":"Spot Mercredi 1930 3","duration":10}]}],"Jeudi":[{"title":"Ecran Jeudi 1930","duration":10,"spots":[{"title":"Spot Jeudi 1930 0","duration":10},{"title":"Spot Jeudi 1930 1","duration":10},{"title":"Spot Jeudi 1930 2","duration":10},{"title":"Spot Jeudi 1930 3","duration":10}]}],"Vendredi":[{"title":"Ecran Vendredi 1930","duration":10,"spots":[{"title":"Spot Vendredi 1930 0","duration":10},{"title":"Spot Vendredi 1930 1","duration":10},{"title":"Spot Vendredi 1930 2","duration":10},{"title":"Spot Vendredi 1930 3","duration":10}]}],"Samedi":[{"title":"Ecran Samedi 1930","duration":10,"spots":[{"title":"Spot Samedi 1930 0","duration":10},{"title":"Spot Samedi 1930 1","duration":10},{"title":"Spot Samedi 1930 2","duration":10},{"title":"Spot Samedi 1930 3","duration":10}]}],"Dimanche":[{"title":"Ecran Dimanche 1930","duration":10,"spots":[{"title":"Spot Dimanche 1930 0","duration":10},{"title":"Spot Dimanche 1930 1","duration":10},{"title":"Spot Dimanche 1930 2","duration":10},{"title":"Spot Dimanche 1930 3","duration":10}]}]},"2000":{"Lundi":[{"title":"Ecran Lundi 2000","duration":10,"spots":[{"title":"Spot Lundi 2000 0","duration":10},{"title":"Spot Lundi 2000 1","duration":10},{"title":"Spot Lundi 2000 2","duration":10},{"title":"Spot Lundi 2000 3","duration":10}]}],"Mardi":[{"title":"Ecran Mardi 2000","duration":10,"spots":[{"title":"Spot Mardi 2000 0","duration":10},{"title":"Spot Mardi 2000 1","duration":10},{"title":"Spot Mardi 2000 2","duration":10},{"title":"Spot Mardi 2000 3","duration":10}]}],"Mercredi":[{"title":"Ecran Mercredi 2000","duration":10,"spots":[{"title":"Spot Mercredi 2000 0","duration":10},{"title":"Spot Mercredi 2000 1","duration":10},{"title":"Spot Mercredi 2000 2","duration":10},{"title":"Spot Mercredi 2000 3","duration":10}]}],"Jeudi":[{"title":"Ecran Jeudi 2000","duration":10,"spots":[{"title":"Spot Jeudi 2000 0","duration":10},{"title":"Spot Jeudi 2000 1","duration":10},{"title":"Spot Jeudi 2000 2","duration":10},{"title":"Spot Jeudi 2000 3","duration":10}]}],"Vendredi":[{"title":"Ecran Vendredi 2000","duration":10,"spots":[{"title":"Spot Vendredi 2000 0","duration":10},{"title":"Spot Vendredi 2000 1","duration":10},{"title":"Spot Vendredi 2000 2","duration":10},{"title":"Spot Vendredi 2000 3","duration":10}]}],"Samedi":[{"title":"Ecran Samedi 2000","duration":10,"spots":[{"title":"Spot Samedi 2000 0","duration":10},{"title":"Spot Samedi 2000 1","duration":10},{"title":"Spot Samedi 2000 2","duration":10},{"title":"Spot Samedi 2000 3","duration":10}]}],"Dimanche":[{"title":"Ecran Dimanche 2000","duration":10,"spots":[{"title":"Spot Dimanche 2000 0","duration":10},{"title":"Spot Dimanche 2000 1","duration":10},{"title":"Spot Dimanche 2000 2","duration":10},{"title":"Spot Dimanche 2000 3","duration":10}]}]},"2100":{"Lundi":[{"title":"Ecran Lundi 2100","duration":10,"spots":[{"title":"Spot Lundi 2100 0","duration":10},{"title":"Spot Lundi 2100 1","duration":10},{"title":"Spot Lundi 2100 2","duration":10},{"title":"Spot Lundi 2100 3","duration":10}]}],"Mardi":[{"title":"Ecran Mardi 2100","duration":10,"spots":[{"title":"Spot Mardi 2100 0","duration":10},{"title":"Spot Mardi 2100 1","duration":10},{"title":"Spot Mardi 2100 2","duration":10},{"title":"Spot Mardi 2100 3","duration":10}]}],"Mercredi":[{"title":"Ecran Mercredi 2100","duration":10,"spots":[{"title":"Spot Mercredi 2100 0","duration":10},{"title":"Spot Mercredi 2100 1","duration":10},{"title":"Spot Mercredi 2100 2","duration":10},{"title":"Spot Mercredi 2100 3","duration":10}]}],"Jeudi":[{"title":"Ecran Jeudi 2100","duration":10,"spots":[{"title":"Spot Jeudi 2100 0","duration":10},{"title":"Spot Jeudi 2100 1","duration":10},{"title":"Spot Jeudi 2100 2","duration":10},{"title":"Spot Jeudi 2100 3","duration":10}]}],"Vendredi":[{"title":"Ecran Vendredi 2100","duration":10,"spots":[{"title":"Spot Vendredi 2100 0","duration":10},{"title":"Spot Vendredi 2100 1","duration":10},{"title":"Spot Vendredi 2100 2","duration":10},{"title":"Spot Vendredi 2100 3","duration":10}]}],"Samedi":[{"title":"Ecran Samedi 2100","duration":10,"spots":[{"title":"Spot Samedi 2100 0","duration":10},{"title":"Spot Samedi 2100 1","duration":10},{"title":"Spot Samedi 2100 2","duration":10},{"title":"Spot Samedi 2100 3","duration":10}]}],"Dimanche":[{"title":"Ecran Dimanche 2100","duration":10,"spots":[{"title":"Spot Dimanche 2100 0","duration":10},{"title":"Spot Dimanche 2100 1","duration":10},{"title":"Spot Dimanche 2100 2","duration":10},{"title":"Spot Dimanche 2100 3","duration":10}]}]},"2200":{"Lundi":[{"title":"Ecran Lundi 2200","duration":10,"spots":[{"title":"Spot Lundi 2200 0","duration":10},{"title":"Spot Lundi 2200 1","duration":10},{"title":"Spot Lundi 2200 2","duration":10},{"title":"Spot Lundi 2200 3","duration":10}]}],"Mardi":[{"title":"Ecran Mardi 2200","duration":10,"spots":[{"title":"Spot Mardi 2200 0","duration":10},{"title":"Spot Mardi 2200 1","duration":10},{"title":"Spot Mardi 2200 2","duration":10},{"title":"Spot Mardi 2200 3","duration":10}]}],"Mercredi":[{"title":"Ecran Mercredi 2200","duration":10,"spots":[{"title":"Spot Mercredi 2200 0","duration":10},{"title":"Spot Mercredi 2200 1","duration":10},{"title":"Spot Mercredi 2200 2","duration":10},{"title":"Spot Mercredi 2200 3","duration":10}]}],"Jeudi":[{"title":"Ecran Jeudi 2200","duration":10,"spots":[{"title":"Spot Jeudi 2200 0","duration":10},{"title":"Spot Jeudi 2200 1","duration":10},{"title":"Spot Jeudi 2200 2","duration":10},{"title":"Spot Jeudi 2200 3","duration":10}]}],"Vendredi":[{"title":"Ecran Vendredi 2200","duration":10,"spots":[{"title":"Spot Vendredi 2200 0","duration":10},{"title":"Spot Vendredi 2200 1","duration":10},{"title":"Spot Vendredi 2200 2","duration":10},{"title":"Spot Vendredi 2200 3","duration":10}]}],"Samedi":[{"title":"Ecran Samedi 2200","duration":10,"spots":[{"title":"Spot Samedi 2200 0","duration":10},{"title":"Spot Samedi 2200 1","duration":10},{"title":"Spot Samedi 2200 2","duration":10},{"title":"Spot Samedi 2200 3","duration":10}]}],"Dimanche":[{"title":"Ecran Dimanche 2200","duration":10,"spots":[{"title":"Spot Dimanche 2200 0","duration":10},{"title":"Spot Dimanche 2200 1","duration":10},{"title":"Spot Dimanche 2200 2","duration":10},{"title":"Spot Dimanche 2200 3","duration":10}]}]},"0":{"Lundi":[{"title":"Ecran Lundi 0","duration":10,"spots":[{"title":"Spot Lundi 0 0","duration":10},{"title":"Spot Lundi 0 1","duration":10},{"title":"Spot Lundi 0 2","duration":10},{"title":"Spot Lundi 0 3","duration":10}]}],"Mardi":[{"title":"Ecran Mardi 0","duration":10,"spots":[{"title":"Spot Mardi 0 0","duration":10},{"title":"Spot Mardi 0 1","duration":10},{"title":"Spot Mardi 0 2","duration":10},{"title":"Spot Mardi 0 3","duration":10}]}],"Mercredi":[{"title":"Ecran Mercredi 0","duration":10,"spots":[{"title":"Spot Mercredi 0 0","duration":10},{"title":"Spot Mercredi 0 1","duration":10},{"title":"Spot Mercredi 0 2","duration":10},{"title":"Spot Mercredi 0 3","duration":10}]}],"Jeudi":[{"title":"Ecran Jeudi 0","duration":10,"spots":[{"title":"Spot Jeudi 0 0","duration":10},{"title":"Spot Jeudi 0 1","duration":10},{"title":"Spot Jeudi 0 2","duration":10},{"title":"Spot Jeudi 0 3","duration":10}]}],"Vendredi":[{"title":"Ecran Vendredi 0","duration":10,"spots":[{"title":"Spot Vendredi 0 0","duration":10},{"title":"Spot Vendredi 0 1","duration":10},{"title":"Spot Vendredi 0 2","duration":10},{"title":"Spot Vendredi 0 3","duration":10}]}],"Samedi":[{"title":"Ecran Samedi 0","duration":10,"spots":[{"title":"Spot Samedi 0 0","duration":10},{"title":"Spot Samedi 0 1","duration":10},{"title":"Spot Samedi 0 2","duration":10},{"title":"Spot Samedi 0 3","duration":10}]}],"Dimanche":[{"title":"Ecran Dimanche 0","duration":10,"spots":[{"title":"Spot Dimanche 0 0","duration":10},{"title":"Spot Dimanche 0 1","duration":10},{"title":"Spot Dimanche 0 2","duration":10},{"title":"Spot Dimanche 0 3","duration":10}]}]}};
    $scope.grid = grid;
    $scope.gridPeriods = Object.keys(grid);
    $scope.gridDaysOfWeek = Object.keys(grid[$scope.gridPeriods[0]]);

  /* event source that calls a function on every view switch */
    $scope.eventsF = function (start, end, callback) {
      var s = new Date(start).getTime() / 1000;
      var e = new Date(end).getTime() / 1000;
      var m = new Date(start).getMonth();
      var events = [{title: 'Feed Me ' + m,start: s + (50000),end: s + (100000),allDay: false, className: ['customFeed']}];
      callback(events);
    };

    $scope.calEventsExt = {
       color: '#f00',
       textColor: 'yellow',
       events: [ 
          {type:'party',title: 'Lunch',start: new Date(y, m, d, 12, 0),end: new Date(y, m, d, 14, 0),allDay: false},
          {type:'party',title: 'Lunch 2',start: new Date(y, m, d, 12, 0),end: new Date(y, m, d, 14, 0),allDay: false},
          {type:'party',title: 'Click for Google',start: new Date(y, m, 28),end: new Date(y, m, 29),url: 'http://google.com/'}
        ]
    };
    /* alert on eventClick */
    $scope.alertOnEventClick = function( event, allDay, jsEvent, view ){
        $scope.alertMessage = (event.title + ' was clicked ');
    };
    /* alert on Drop */
     $scope.alertOnDrop = function(event, dayDelta, minuteDelta, allDay, revertFunc, jsEvent, ui, view){
       $scope.alertMessage = ('Event Droped to make dayDelta ' + dayDelta);
    };
    /* alert on Resize */
    $scope.alertOnResize = function(event, dayDelta, minuteDelta, revertFunc, jsEvent, ui, view ){
       $scope.alertMessage = ('Event Resized to make dayDelta ' + minuteDelta);
    };
    /* add and removes an event source of choice */
    $scope.addRemoveEventSource = function(sources,source) {
      var canAdd = 0;
      angular.forEach(sources,function(value, key){
        if(sources[key] === source){
          sources.splice(key,1);
          canAdd = 1;
        }
      });
      if(canAdd === 0){
        sources.push(source);
      }
    };
    /* add custom event*/
    $scope.addEvent = function() {
      $scope.events.push({
        title: 'Open Sesame',
        start: new Date(y, m, 28),
        end: new Date(y, m, 29),
        className: ['openSesame']
      });
    };
    /* remove event */
    $scope.remove = function(index) {
      $scope.events.splice(index,1);
    };
    /* Change View */
    $scope.changeView = function(view,calendar) {
      calendar.fullCalendar('changeView',view);
    };
    /* Change View */
    $scope.renderCalender = function(calendar) {
      calendar.fullCalendar('render');
    };
    /* config object */
    $scope.uiConfig = {
      calendar:{
        height: 450,
        editable: true,
        header:{
          left: 'title',
          center: '',
          right: 'today prev,next'
        },
        eventClick: $scope.alertOnEventClick,
        eventDrop: $scope.alertOnDrop,
        eventResize: $scope.alertOnResize
      }
    };

    $scope.changeLang = function() {
      if($scope.changeTo === 'Hungarian'){
        $scope.uiConfig.calendar.dayNames = ["VasÃ¡rnap", "HÃ©tfÅ‘", "Kedd", "Szerda", "CsÃ¼tÃ¶rtÃ¶k", "PÃ©ntek", "Szombat"];
        $scope.uiConfig.calendar.dayNamesShort = ["Vas", "HÃ©t", "Kedd", "Sze", "CsÃ¼t", "PÃ©n", "Szo"];
        $scope.changeTo= 'English';
      } else {
        $scope.uiConfig.calendar.dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        $scope.uiConfig.calendar.dayNamesShort = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        $scope.changeTo = 'Hungarian';
      }
    };
    /* event sources array*/
    $scope.eventSources = [$scope.events, $scope.eventSource, $scope.eventsF];
    $scope.eventSources2 = [$scope.calEventsExt, $scope.eventsF, $scope.events];
    
    
    
    
    var elements = [{"nom" : "gilles", "prenom" : "chat"}
           , {"nom" : "jean", "prenom" : "souris"}
           ];
    
    $scope.liste = elements;
    
    /**
     * Méthode appelé lorsqu'on drop un spot dans un écran.
     */
    $scope.handleDrop = function(spot, screen) {
        var msg = 'Spot ' + spot + ' has been dropped into ' + screen;
        //alert('Spot ' + spot + ' has been dropped into ' + screen);
        console.debug(msg);
    }
    
    /**
     * Animations.
     */
    $scope.fadeTotalDuration = false;
    this.toogleFade = function() {
        $scope.fadeTotalDuration = !$scope.fadeTotalDuration;
        alert($scope.fadeTotalDuration);
    }
}]);


/** --------------------------------------------
 * Here below are declared all animations.
 ** --------------------------------------------
 */
app.animation(".fade", function() {
    return {
        addClass: function(element, className) {
            TweenMax.to(element, 1, {opacity: 0});
        },
        removeClass: function(element, className) {
            TweenMax.to(element, 1, {opacity: 1});
        }
    }
});

/** --------------------------------------------
 * Here below are declared all directives.
 ** --------------------------------------------
 */

/**
 * Définition d'un écran, au sens cellule de la grille de programmation.
 */
app.directive('screen', function () {
    return {
        restrict: 'E',
        scope: {
            done: '&'
        },
        template: '<div>' +
                    '<div class="c-screen-header">' +
                    'Hello' +
                    '</div>' +
                    '</div>'
    }
});
/**
 * Permet de switcher l'état du display en fonction d'une variable.
 */
app.directive('toggleFade', function () {
    return function(scope, element, attrs) {
        scope.$watch(attrs.toggleFade, function(newValue, oldValue) {
            if (newValue) {
                $animate.addClass(element, "fade")
            } else {
                $animate.removeClass(element, "fade")
            }
        })
     }
});

/**
 * Définition d'un élément draggable. A ajouter en tant qu'attribut.
 */
app.directive('draggable', function() {
    return function(scope, element) {
        // this gives us the native JS object
        var el = element[0];

        el.draggable = true;

        el.addEventListener(
            'dragstart',
            function(e) {
                e.dataTransfer.effectAllowed = 'move';
                e.dataTransfer.setData('Text', this.id);
                this.classList.add('drag');
                return false;
            },
            false
        );

        el.addEventListener(
            'dragend',
            function(e) {
                this.classList.remove('drag');
                return false;
            },
            false
        );
    }
});
/**
 * Définition d'un élément droppable. A ajouter en tant qu'attribut.
 */
app.directive('droppable', function() {
    return {
        scope: {
          drop: '&'
        },
        link: function(scope, element) {
            // again we need the native object
            var el = element[0];
            
            el.addEventListener(
                'dragover',
                function(e) {
                    e.dataTransfer.dropEffect = 'move'; // effect needs to be the same as 'effectAllowed' in the dragstart
                    // allows us to drop
                    if (e.preventDefault) e.preventDefault();
                    this.classList.add('over');
                    return false;
                },
                false
            );
            
            el.addEventListener(
                'dragenter',
                function(e) {
                    this.classList.add('over');
                    return false;
                },
                false
            );

            el.addEventListener(
                'dragleave',
                function(e) {
                    this.classList.remove('over');
                    return false;
                },
                false
            );
            
            el.addEventListener(
                'drop',
                function(e) {
                    // Stops some browsers from redirecting.
                    if (e.stopPropagation) e.stopPropagation();

                    this.classList.remove('over');

                    var item = document.getElementById(e.dataTransfer.getData('Text'));
                    this.appendChild(item);
                    
                    var binId = this.id;
                    var item = document.getElementById(e.dataTransfer.getData('Text'));
                    this.appendChild(item);
                    // call the passed drop function
                    scope.$apply(function(scope) {
                        var fn = scope.drop();
                        if ('undefined' !== typeof fn) {
                          fn(item.id, binId);
                        }
                    });
                    return false;
                },
                false
            );
            
        }
    }
});