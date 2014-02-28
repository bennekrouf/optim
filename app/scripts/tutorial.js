app.controller('TutorialCtrl', function ($scope) {
    $scope.logChore = function (chore) {
        alert(chore + " is done!");
    }
    
    $scope.list1 = {title: 'AngularJS - Drag Me'};
    $scope.list2 = {title: 'AngularJS - Drop Me'};
});
        
app.directive('kid', function () {
    return {
        restrict: 'E',
        scope: {
            done: '&'
        },
        template: '<input type="text" ng-model="chore">' +
            '{{chore}}' +
            '<div class="btn btn-default btn-sm" ng-click="done({chore:chore})">I\'m done!</div>'
    }
});

app.directive('drink', function () {
    return {
        template: '<div>{{toto.flavor}}</div>',
        link: function(toto) {
            toto.flavor = "cherry";
        }
    }
});