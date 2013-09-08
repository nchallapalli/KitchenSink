'use strict';

angular.module("KitchenSink").factory("geoLocationErrorCodes", [function(){
	return {
		UNSUPPORTED: -1,
		PERMISSION_DENIED: 1,
		POSITION_UNAVAILABLE: 2,
		TIMEOUT: 3
	};
}]);


angular.module("KitchenSink")
	.constant("options", {})
	.factory("geoLocation",
		["$q", "$rootScope", "$window", "$timeout", "options", "geoLocationErrorCodes",
		function($q, $rootScope, $window, $timeout, options, geoLocationErrorCodes){

			var isSupported = function(){
				return (angular.isDefined($window.navigator) && angular.isDefined($window.navigator.geolocation));
			};

			var apply = function(){
				$rootScope.$apply();
			}

			return {
				currentPosition: function(){
					var defer = $q.defer();

					if(!isSupported()) {
						$timeout(function(){
							defer.reject({code: geoLocationErrorCodes.UNSUPPORTED, message: "Geo location is not supported with this browser."});
							apply();
						}, 0);
					}
					else
					{
						$timeout(function(){
							$window.navigator.geolocation.getCurrentPosition(
								function(position){
									defer.resolve(position);
									apply();
								},
								function(error){
									defer.reject(error);
									apply();
								},
								options
							);
						}, 0);
					}

					return defer.promise;
				}
			};
		}]);
