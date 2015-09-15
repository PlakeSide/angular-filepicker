angular.module('filepicker', [])
.directive("filepicker", function () {
    return {
        scope: {
            callback: '&',
            'pickerclass': '@'
        },
        transclude: true,
        restrict: "A",
        template: "<a href='javascript:;' class='{{pickerclass}}' ng-click='pickFiles()' ng-transclude></a>",
        link: function (scope, element, attrs) {
            scope.pickFiles = function () {
                var picker_options = {
                    container: 'modal',
                    mimetypes: attrs.mimetypes ? eval(attrs.mimetypes) : ['*'],
                    multiple: attrs.multiple ? eval(attrs.multiple) : false
                };

                var path = attrs.path ? attrs.path : '/uploads/',
                        container = attrs.container || '';

                var store_options = {
                    location: 'S3',
                    path: path,
                    container: container
                };

                filepicker.setKey(attrs.apiKey ? attrs.apiKey : '');
                filepicker.pickAndStore(picker_options, store_options, function (fpfiles) {
                    scope.$apply(function () {
                        scope.callback({file: fpfiles});
                    });
                });
            };
        }
    };
});
