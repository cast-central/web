(function() {
    'use strict';

    angular
        .module('cast-central-web.casts')
        .directive('cast', RenderCast);

    function RenderCast() {

        // Definition of directive
        var directiveDefinitionObject = {
            restrict: 'E',
            templateUrl: 'cast.html',
            compile: function(tElem, attrs){
                return function(scope, elem, attrs){
                    scope.cast = scope.$eval(attrs.cast);
                }
            }
        };

        return(directiveDefinitionObject);
    }
})();
