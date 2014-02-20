angular.module('OffreApp.mock', ['OffreApp', 'ngMockE2E'])

.run(function($httpBackend, API) {

	var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();

    /* Liste des écrans publicitaires affichés sur la grille. */
    var grid = {"grid":{"800":{"Lundi":[{"title":"Ecran Lundi 800","duration":10,"spots":[{"title":"Spot Lundi 800 0","duration":10}]}],"Mardi":[{"title":"Ecran Mardi 800","duration":10,"spots":[{"title":"Spot Mardi 800 0","duration":10}]}],"Mercredi":[{"title":"Ecran Mercredi 800","duration":10,"spots":[{"title":"Spot Mercredi 800 0","duration":10}]}],"Jeudi":[{"title":"Ecran Jeudi 800","duration":10,"spots":[{"title":"Spot Jeudi 800 0","duration":10}]}],"Vendredi":[{"title":"Ecran Vendredi 800","duration":10,"spots":[{"title":"Spot Vendredi 800 0","duration":10}]}],"Samedi":[{"title":"Ecran Samedi 800","duration":10,"spots":[{"title":"Spot Samedi 800 0","duration":10}]}],"Dimanche":[{"title":"Ecran Dimanche 800","duration":10,"spots":[{"title":"Spot Dimanche 800 0","duration":10}]}]},"1230":{"Lundi":[{"title":"Ecran Lundi 1230","duration":10,"spots":[{"title":"Spot Lundi 1230 0","duration":10}]}],"Mardi":[{"title":"Ecran Mardi 1230","duration":10,"spots":[{"title":"Spot Mardi 1230 0","duration":10}]}],"Mercredi":[{"title":"Ecran Mercredi 1230","duration":10,"spots":[{"title":"Spot Mercredi 1230 0","duration":10}]}],"Jeudi":[{"title":"Ecran Jeudi 1230","duration":10,"spots":[{"title":"Spot Jeudi 1230 0","duration":10}]}],"Vendredi":[{"title":"Ecran Vendredi 1230","duration":10,"spots":[{"title":"Spot Vendredi 1230 0","duration":10}]}],"Samedi":[{"title":"Ecran Samedi 1230","duration":10,"spots":[{"title":"Spot Samedi 1230 0","duration":10}]}],"Dimanche":[{"title":"Ecran Dimanche 1230","duration":10,"spots":[{"title":"Spot Dimanche 1230 0","duration":10}]}]}}};
	
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
    $httpBackend.whenGET(API.GRID).respond(grid);

    $httpBackend.whenGET('views/tpl/criteres.affichage.tpl.html').passThrough();
    $httpBackend.whenGET('views/tpl/filtres.ecrans.tpl.html').passThrough();
    $httpBackend.whenGET('views/tpl/filtres.campagnes.tpl.html').passThrough();
    $httpBackend.whenGET('views/tpl/details.ecrans.tpl.html').passThrough();
    $httpBackend.whenGET('views/calendar.html').passThrough();
    $httpBackend.whenGET('views/notifications.html').passThrough();
    $httpBackend.whenGET('views/main.html').passThrough();
    $httpBackend.whenGET('views/tutorial.html').passThrough();

});
