function fib(n) {
	var sum = 1;
	for (var i = 2; i < n; i++) {
		sum = fib(n - 1) + fib(n - 2);
	}
	return sum;
}

console.log(fib(3)) // 2 
console.log(fib(7)) // 13
