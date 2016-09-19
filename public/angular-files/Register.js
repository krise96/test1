(function() {
    var module=angular.module('MainModule');
    
    function RegisterController($scope, $http){
       var vm =this;
    };
    
    
     module.component('register', {
            templateUrl: 'angular-files/templates/register.html',
            controller: RegisterController,
            controllerAs: 'register'
          
    });
})();