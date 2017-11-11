function pow(base, idx) {
	var res = base;
	for (var i = idx - 1; i > 0; i--) {
		res *= base;
	}
	return res;
}


// console.log(pow(3, 2)); // 9
// console.log(pow(2, 2)); // 4
// console.log(pow(10, 5)); // 100000
// console.log(pow(2, 8))
console.log(pow(3, 1))
