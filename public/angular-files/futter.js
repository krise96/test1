(function() {
    var module=angular.module('MainModule');
    
    function futterController($scope, $http){
       var vm =this;
    };
    
    
     module.component('futter', {
            restrict: 'E',
            templateUrl: 'angular-files/templates/futter.html',
            controller: futterController
        }   
    );
})();