angular.module('OffreApp')

.factory('PubFactory', ['API', '$resource', function(API, $resource){

  return $resource(API.SPOT_LIST, {}, {
      getSpotList: {method: 'GET', params: {}, isArray: true}
  });
}]);