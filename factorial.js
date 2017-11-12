function factorial(n) {
	return n < 2 ? n : n * factorial(n - 1);
}

// function factorial(n) {
// 	var res = n;
// 	for (var i = n - 1; i > 0; i--) {
// 		res *= i;
// 	}
// 	return res;
// }


console.log(factorial(1)); // 6
console.log(factorial(3)); // 6
console.log(factorial(5)); // 120 5*


