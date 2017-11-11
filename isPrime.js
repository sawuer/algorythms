function isPrime(n) {
	if (n == 1 || n == 0) return false;
	for (var i = n-1; i > 1; i--) {
		if (n % i === 0) 
			return false;
	}
	return true;
}


console.log(isPrime(0));                          // false
console.log(isPrime(1));                          // false
console.log(isPrime(17));                         // true
