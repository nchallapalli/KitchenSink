describe("KitchenSink Tools", function(){
	var tools = null;

	beforeEach(function() {
		module("KitchenSink.Tools");
		return inject(function($injector) {
			return tools = $injector.get("tools");
		});
	});

	describe("isNullEmptyOrWhitespace tests", function(){
		it("should determine not empty or white space for a valid string", function(){
			expect(tools.isNullEmptyOrWhitespace("opentable")).toBe(false);
		});

		it("should identify a null", function(){
			expect(tools.isNullEmptyOrWhitespace(null)).toBe(true);
		});

		it("should identify an empty string", function(){
			expect(tools.isNullEmptyOrWhitespace("")).toBe(true);
		});

		it("should identify an empty space", function(){
			expect(tools.isNullEmptyOrWhitespace(" ")).toBe(true);
		});

		it("should identify a tab", function(){
			expect(tools.isNullEmptyOrWhitespace("\t")).toBe(true);
		});

		it("should identify a new line", function(){
			expect(tools.isNullEmptyOrWhitespace("\n")).toBe(true);
		});
	});
});
