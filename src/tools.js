'use strict';

angular.module("KitchenSink.Tools", []).factory("tools", [function(){
	return {
		isNullEmptyOrWhitespace: function(string){
			return !angular.isString(string)
				|| string === null
				|| string.trim() === "";
		}
	};
}]);
