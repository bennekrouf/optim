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
  'SPOT_LIST': '/api/spot/list'
});