describe("KitchenSink GoogleGeoCoding", function() {
	var geoCodingService = null,
		googleGeoCoderApi = null,
		onSuccesCallback = null,
		onErrorCallback = null,
		status = null,
		results = null,
		error = null;
		testAddress = {address:"sf", region:"US"};
		

	var $window = null,
		$timeout = null;
	
	beforeEach (function() {
		status = "OK"; 

		//mock google library object
		$window = {
			google: {
				maps: {
					GeocoderStatus: {OK: "OK", ERROR:"ERROR"},
					Geocoder:function () {
						return {
							geocode: jasmine.createSpy().andCallFake(function(params) {
								results = [{
									formatted_address: "San Francisco CA, USA",
									geometry: {
										location: {
											lat: function() {
												return 37.7749295;
											},
											lng: function() {
												return -122.41941550000001;
											}
										}
									}
								}];
								arguments[1](results, status);
							})
						};
					}
				}
			},
			navigator: {
				userAgent:""
			}
		};

		module("KitchenSink");
			
		module(function($provide) {
			$provide.value("$window", $window);
		});

		inject(function($injector) {
			geoCodingService = $injector.get("googleGeoCoding");
			$timeout = $injector.get("$timeout");
		});

		onSuccesCallback = jasmine.createSpy();
		onErrorCallback = jasmine.createSpy();
	});

	describe("test geoCoding with success callback", function () {
		it("should process address and return valid geo results through callback", function () {
			makegeoCodingCall(testAddress);
			expect(onSuccesCallback).toHaveBeenCalledWith(results);
		});
	});
	
	describe("test error while geocoding with error callback", function () {
		beforeEach(function () {
			status = "ERROR";
			error = { code: status, message: "Unable to locate address at this time." };
		});
	
		it("should send error status with message", function () {
			makegeoCodingCall(testAddress);
			expect(onErrorCallback).toHaveBeenCalledWith(error);
		});
	});

	describe("test error when invalid arguments are passed in", function () {
		beforeEach(function () {
			error = { code: -1, message: "Invalid arguments, Please provide valid data object with address." };
		});

		it("should raise error with invalid arguments message", function () {
			makegeoCodingCall(null);
			expect(onErrorCallback).toHaveBeenCalledWith(error);
		});
	});
			
	describe("test error when google geo coding service is unavailable", function () {
		beforeEach(function () {
			error = { code: -1, message: "Google Geocoding service is unavailable, please make sure Api libraries are referenced correctly." };
			$window.google = null;
			makegeoCodingCall(testAddress);
		});

		it("should raise error with google geocoder service unavailable message", function () {
			expect(onErrorCallback).toHaveBeenCalledWith(error);
		});
	});

	function makegeoCodingCall(address, region) {
		geoCodingService.GeoCodeAddress(address, region).then(onSuccesCallback, onErrorCallback);
		$timeout.flush();
	}
});