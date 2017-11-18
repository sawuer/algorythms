function range() {
	var res = [];
	for (var i = Math.min(...arguments); i <= Math.max(...arguments); i++) {
		res.push(i);
	}
	return res;
}


function sumArr(arr) {
	return arr.reduce((a, b) => a + b);
}

console.log(sumArr(range(1, 10, 8, 4))); // 55