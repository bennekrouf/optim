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
      
      
      $scope.affichage = {
      
            displayTotalDuration : true
      };
      
      
                             
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

    $scope.gridPeriods = {};
    $scope.gridDaysOfWeek = {};

    PeriodFactory.getGrid(function(data){
        $scope.grid = data;

        $scope.gridPeriods = Object.keys($scope.grid);
        $scope.gridDaysOfWeek = Object.keys($scope.grid[$scope.gridPeriods[0]]);
      });
      
    //$scope.grid = grid;
      // var grid = $scope.grid;

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
    
    $scope.jqueryHide = true;
    $scope.jqueryHideMe = function(message) {
    	if ($scope.jqueryHide) {
    		$(".jqueryHideMe").hide();
    	} else {
    		$(".jqueryHideMe").show();
    	}
    	$scope.jqueryHide = !$scope.jqueryHide;
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