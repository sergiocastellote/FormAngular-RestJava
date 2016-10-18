(function() {
    'use strict';

    angular
        .module('crudParaWeb')
        .factory('MainFactory', MainFactory);
    MainFactory.$inject = [];
    /* @ngInject */
    function MainFactory() {

        var fac = {
            cleanForm: cleanForm
        };

        function cleanForm(data){
            for(var i in data){
                data[i]="";
            }
        }

        return fac;
    }
})();
