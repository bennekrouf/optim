var app = angular.module('OffreApp', []);


app.controller('OffreCtrl', function($scope){
    
    var elements = [{"nom" : "gilles", "prenom" : "chat"}
               , {"nom" : "jean", "prenom" : "souris"}
               ];
    
    
    
    $scope.liste = elements;

});


