'use strict';

angular.module("KitchenSink").factory("googleGeoCoding", ["$rootScope", "$window", "$timeout", "$q", function ($rootScope, $window, $timeout, $q) {
	return {
		GeoCodeAddress: function (data) {
		
			var defer = $q.defer();
			
			var apply = function () {
				$rootScope.$apply();
			};

			if (!$window.google) {
				$timeout(function() {
					defer.reject({ code: -1, message: "Google Geocoding service is unavailable, please make sure Api libraries are referenced correctly." });
					apply();
				}, 0);
				return defer.promise;
			}			

			if (!data) {
				$timeout(function() {
					defer.reject({ code: -1, message: "Invalid arguments, Please provide valid data object with address." });
					apply();
				}, 0);
				return defer.promise;
			}

			$timeout(function() {
				var googleClient = new $window.google.maps.Geocoder();
					googleClient.geocode(data,
						function (results, status) {
							if (status == $window.google.maps.GeocoderStatus.OK) {
								defer.resolve(results);
								apply();
							} else {
								defer.reject({ code: status, message: "Unable to locate address at this time." });
								apply();
							}
						});
			}, 0);

			return defer.promise;
		}
	};
}]);