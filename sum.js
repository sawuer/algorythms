function filterNum(els) {
	return els.filter(el => !isNaN(+el));
}	

function verify(els) {
	for (var i = 0; i < els.length; i++) {
		if (isNaN(+els[i])) {
			return console.log('Not a number');
		}
	}
	return els;
}

// function sum() {
// 	return verify([...arguments]).reduce((a, b) => +a + +b);
// }
// function sum(...rest) {
// 	return filterNum(rest).reduce((a, b) => +a + +b);
// }

const sum = (...args) => filterNum(args).reduce((a, b) => +a + +b);


console.log(sum(0)); 			// 0
console.log(sum(1)); 			// 1
console.log(sum(1,1)); 		// 2
console.log(sum(1,1,1)); 	// 3

console.log(sum('1', '1', '1', '1')); 	// 4
console.log(sum('sdf', '2', '1', '1')); // 4