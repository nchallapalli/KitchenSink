describe("KitchenSink Geolocation", function(){
	var geoLocation = null,
		geoLocationErrorCodes = null,
		onSuccesCallback = null,
		onErrorCallback = null,
		error = null,
		position = null;

		var $window = null,
		$timeout= null,
		$rootScope = null;

	beforeEach(function() {
		$window = {
			navigator: {}
		};

		module("KitchenSink");
		module(function($provide){
			$provide.value("$window", $window);
		});

		inject(function($injector) {
			geoLocation = $injector.get("geoLocation");
			geoLocationErrorCodes = $injector.get("geoLocationErrorCodes");
			$timeout = $injector.get("$timeout");
			$rootScope= $injector.get("$rootScope");
		});

		onSuccesCallback = jasmine.createSpy();
		onErrorCallback = jasmine.createSpy();
	});



	describe("testing onSuccess callback", function(){
		beforeEach(function(){
			$window.navigator = getGeoLocationMock();
			position = null;
		})

		it("should be able to process and return a valid position through callback", function(){
			setupFakeSuccessCallback();
			makeGeoLocationCall();
			expect(onSuccesCallback).toHaveBeenCalledWith(position);
		});

		function setupFakeSuccessCallback(){
			$window.navigator.geolocation.getCurrentPosition.andCallFake(function(){
				position = {
					"timestamp": 1378590875531,
					"coords": {
						"speed": null,
						"heading": null,
						"altitudeAccuracy": null,
						"accuracy": 24000,
						"altitude": null,
						"longitude": -121.80578899999999,
						"latitude": 38.004920999999996
					}
				};

				// Trigger the success callback for the getCurrentPosition method
				arguments[0](position);
			});
		}
	});

	describe("testing onError callback and non geolocation support", function(){

		it("should return an error due to the geolocation property not being avaliable.", function(){
			var result = geoLocation.currentPosition().then(onSuccesCallback, onErrorCallback);
			$timeout.flush();
			expect(onErrorCallback).toHaveBeenCalledWith({
					code: geoLocationErrorCodes.UNSUPPORTED,
					message: "Geo location is not supported with this browser."
				});
		})

		describe("with geolocation error", function(){
			beforeEach(function(){
				$window.navigator = getGeoLocationMock();
				error = null;
			})

			it("should be able to communicate a geolocation permission denied error", function(){
				setupFakeErrorCallback(geoLocationErrorCodes.PERMISSION_DENIED, "Permission denied");
				makeGeoLocationCall();
				expect(onErrorCallback).toHaveBeenCalledWith(error)
			});

			it("should be able to communicate a geolocation position unavailable error", function(){
				setupFakeErrorCallback(geoLocationErrorCodes.POSITION_UNAVAILABLE, "Position unavailable");
				makeGeoLocationCall();
				expect(onErrorCallback).toHaveBeenCalledWith(error)
			});

			it("should be able to communicate a geolocation timeout error", function(){
				setupFakeErrorCallback(geoLocationErrorCodes.TIMEOUT, "Timeout");
				makeGeoLocationCall();
				expect(onErrorCallback).toHaveBeenCalledWith(error)
			});
		})
	});

	function setupFakeErrorCallback(code, message){
		$window.navigator.geolocation.getCurrentPosition.andCallFake(function(){
			error = {code: code, message: message};

			// Trigger the error callback for the getCurrentPosition method
			arguments[1](error);
		});
	}

	function makeGeoLocationCall(){
		geoLocation.currentPosition().then(onSuccesCallback, onErrorCallback);
		$timeout.flush();
	}

	function getGeoLocationMock(){
		return {
			geolocation: {
				getCurrentPosition: jasmine.createSpy()
			}
		};
	}
});
