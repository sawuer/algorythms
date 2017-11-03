(function() {
	this.assert = (result, expected) => {
		return console.assert(result === expected, 'Expected ' + expected + ', return ' + result);
	}
})(); 
