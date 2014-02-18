angular.module('OffreApp.mock', ['OffreApp', 'ngMockE2E'])

.run(function($httpBackend, API){

	var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();

	var spots = [
			      {title: 'All Day Event',start: new Date(y, m, 1)},
			      {title: 'Long Event',start: new Date(y, m, d - 5),end: new Date(y, m, d - 2)},
			      {id: 999,title: 'Repeating Event',start: new Date(y, m, d - 3, 16, 0),allDay: false},
			      {id: 999,title: 'Repeating Event',start: new Date(y, m, d + 4, 16, 0),allDay: false},
			      {title: 'Birthday Party',start: new Date(y, m, d + 1, 19, 0),end: new Date(y, m, d + 1, 22, 30),allDay: false},
			      {title: 'Lolo Event1',start: new Date(y, m, d + 2, 19, 0),end:  new Date(y, m, d + 2, 19, 15),allDay: false},
			      {title: 'Lolo Event2',start: new Date(y, m, d + 2, 19, 15),end:  new Date(y, m, d + 2, 19, 30),allDay: false},
			      {title: 'Lolo Event3',start: new Date(y, m, d + 2, 19, 30),end:  new Date(y, m, d + 2, 19, 45),allDay: false},
			      {title: 'Lolo Event3',start: new Date(y, m, d + 2, 19, 30),end:  new Date(y, m, d + 2, 20, 00),allDay: false},
			      {title: 'Click for Google',start: new Date(y, m, 28),end: new Date(y, m, 29),url: 'http://google.com/'}
  	    ];

	$httpBackend.whenGET(API.SPOT_LIST).respond(spots);

    $httpBackend.whenGET('views/calendar.html').passThrough();
    $httpBackend.whenGET('views/notifications.html').passThrough();
    $httpBackend.whenGET('views/main.html').passThrough();

});