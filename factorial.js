function factorial(num) {
	return num != 0 ? num * factorial(num - 1) : 1;
}

function factorial(num) {
	var res = num;
	for (var i = num - 1; i > 0; i--) {
		res *= i;
	}
	return res;
}


// console.log(factorial(3)); // 6
console.log(factorial(5)); // 120 5*


