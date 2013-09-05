describe("KitchenSink Tools", function(){
	var tools = null;

	beforeEach(function() {
		module("KitchenSink.Tools");
	});

	beforeEach(function() {
		module("KitchenSink.Tools");
		return inject(function($injector) {
			return tools = $injector.get("tools");
		});
	});

	it("should validate string values", function(){
		expect(tools.isNullEmptyOrWhitespace("opentable")).toBe(false);
		expect(tools.isNullEmptyOrWhitespace(null)).toBe(true);
		expect(tools.isNullEmptyOrWhitespace("")).toBe(true);
		expect(tools.isNullEmptyOrWhitespace(" ")).toBe(true);
		expect(tools.isNullEmptyOrWhitespace("\t")).toBe(true);
		expect(tools.isNullEmptyOrWhitespace("\n")).toBe(true);
	});
})
