var app = angular.module('OffreApp')

.constant('CODE', {

  'LANGUAGE': 'Hungarian'

})

// Constantes : Type de notifications
.constant('NOTIFICATION_TYPE', {
    'SUCCESS': 'success',
    'INFO': 'info',
    'WARNING': 'warning',
    'ERROR': 'danger'
})

.constant('API', {
  'SPOT_LIST': '/api/spot/list',
  'GRID': '/api/grid',
  'JSON_TEST': 'http://localhost:9105/offrePocWebService/offrepoc/grid/CPL/1'
})

/* Constants for Calandar building. */
.constant('DAYS_OF_WEEK', [
                      {day: 'Lundi'},
                      {day: 'Mardi'},
                      {day: 'Mercredi'},
                      {day: 'Jeudi'},
                      {day: 'Vendredi'},
                      {day: 'Samedi'},
                      {day: 'Dimanche'}
                      ]);
