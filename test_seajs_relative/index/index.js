define(function (require, exports) {
	//这里如果用index/base，则concat不会成功，在seajs里面可以正常使用
	var base = require('./base');

	exports.index = function() {
		base.test();
	}
})