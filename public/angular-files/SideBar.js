(function() {
    var module=angular.module('MainModule');
    
    function sideController($scope, $http){
       var vm =this;
    };
    
    
     module.directive('sideBar', function ($window){
        return {
            restrict: 'E',
            templateUrl: 'angular-files/templates/side.html',
            controller: sideController
        };   
    });
})();