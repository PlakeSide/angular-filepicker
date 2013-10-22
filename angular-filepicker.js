app.directive("filepicker", function($location){
	return {
		scope: {
			callback: '&'
		},
		transclude: true,
		restrict: "A",
		template: "<a href='' class='btn btn-default' ng-click='pickFiles()' ng-transclude></a>",
		link: function(scope, element, attrs) {
			scope.pickFiles = function () {
			    var picker_options = {
			        'container': 'modal',
			        'services': ['BOX','COMPUTER','WEBCAM','DROPBOX','EVERNOTE','FACEBOOK','FLICKR','FTP','GITHUB','GOOGLE_DRIVE','SKYDRIVE','PICASA','WEBDAV']
			    };

			    if(attrs.multiple == 'true'){
			    	picker_options['multiple'] = true;
			    }

			    var path = attrs.path ? attrs.path : '/uploads/';

			    var store_options = {
			    	location: 'S3',
			    	path: path
			    }

			    filepicker.pickAndStore(picker_options, store_options, function (fpfiles) {
			        scope.$apply(function(){
			        	scope.callback({file:fpfiles});
			        });
			    });
			};
		}
	}
})
