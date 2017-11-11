function getDecimal(x) {
	return +('0.' + (x + '').split('.')[1]);
}

console.log( getDecimal(12.345) ); // 0.345
console.log( getDecimal(1.2) ); // 0.2
console.log( getDecimal(-1.2) ); // 0.2