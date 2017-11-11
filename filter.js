function filter(arr, range) {
	var res = [];
	for (var i = 0; i < arr.length; i++) {
		if (i < range) {
			res.push(i);
		}
	}
	return res;
}

console.log(filter([1, 10, 2, 3, 4], 4));