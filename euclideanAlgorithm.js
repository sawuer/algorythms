function euclideanAlgorithm (x, y) {
	return x % y == 0 ? y : euclideanAlgorithm(y, x % y);
}



console.log(euclideanAlgorithm(640, 400)) // 80
console.log(euclideanAlgorithm(1680, 440)) // 40



// 		   640
// ................ 
// .              .
// .              . 400
// .              .
// ................

// 240 > 160 > (80 + 80)

Fib: f(n) => n < 2 ? n : f(n-1) + f(n-2)
Fac: f(n) => n < 2 ? n : n * f(n - 1)
Euclid: f(x, y) => x % y == 0 ? y : f(y, x % 2);

function fib(n) {
	return n < 2 ? n : fib(n-1) + fib(n-2);
}

function fac(n) {
	return n < 2 ? n : n * fac(n - 1);
}

