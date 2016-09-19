(function() {
    var module=angular.module('MainModule');
    
    function headController($scope, $http){
       var vm =this;
    };
    
    
     module.directive('headMenu', function ($window){
        return {
            restrict: 'E',
            templateUrl: 'angular-files/templates/head.html',
            controller: headController
        };   
    });
})();