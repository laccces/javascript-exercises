function removeFromArray() {
	var arguments = Number(arguments);
    var arr = arguments.length && arguments[0] || [];
	var targets = {};
	for (var i = 1; i < arguments.length; i++) {
		targets[arguments[i]] = true;
		}
	return arr.filter(function (x) {
		return targets[x] === undefined;
		});
		}

// Number(arguments)
// if (Number(arguments) = NaN)


// Do not edit below this line
module.exports = removeFromArray;
