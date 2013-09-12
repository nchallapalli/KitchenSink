'use strict';

angular.module("KitchenSink").factory("googleGeoCoding", ["$window", "$timeout", "$q", function ($window, $timeout, $q) {
	return {
		GeoCodeAddress: function (address, region) {
		
			var defer = $q.defer();

			if (!$window.google) {
				$timeout(function() {
					 defer.reject({ code: -1, message: "Google Geocoding service is unavailable, please make sure Api libraries are referenced correctly." });;
				}, 0);
				return defer.promise;
			}			

			if (!address || !region) {
				$timeout(function() {
					defer.reject({code: -1, message: "Invalid arguments, Please provide valid address and region code(ex: US, GB etc)" });
				}, 0);
				return defer.promise;
			}

			$timeout(function() {
				var googleClient = new $window.google.maps.Geocoder();
				googleClient.geocode({ 'address': address, 'region': region },
					function(results, status) {
						if (status == $window.google.maps.GeocoderStatus.OK) {
							defer.resolve(results);
						} else {
							defer.reject({ code: status, message: "Unable to locate address at this time." });
						}
					});
			}, 0);

			return defer.promise;
		}
	};
}]);