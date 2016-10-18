(function() {
    'use strict';

    angular
        .module('crudParaWeb')
        .controller('MainController', MainController);

    /** @ngInject */
    function MainController($http, $scope, $mdDialog, MainFactory, ConnectionService) {
        var vm = this;
        vm.array = [];
        vm.saveUser = function() {
            ConnectionService.saveUser(vm.form).then(function succes(response){
              console.log(response);
              MainFactory.cleanForm(vm.form);
            }, function error(response){
              console.log(response);
            });
        }

        vm.showUsers = function(ev) {
            $mdDialog.show({
                templateUrl: 'app/main-dialog/dialog.mat.html',
                clickOutsideToClose: true
            })
        };

    }
})();
