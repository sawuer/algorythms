function permute(str) {

	function factorial(str) {
		var res = str.length;
		for (var i = str.length - 1; i > 0; i--) {
			res *= i;
		}
		return res;
	}


	return factorial(str)

}


console.log(permute('abc')); // ['abc', 'acb', 'bac', 'bca', 'cab', 'cba']