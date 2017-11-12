function filterNum(els) {
	return els.filter(el => !isNaN(+el));
}	

function sum() {
	return filterNum([...arguments]).reduce((a, b) => +a + +b);
}

console.log(sum(0)); 			// 0
console.log(sum(1)); 			// 1
console.log(sum(1,1)); 		// 2
console.log(sum(1,1,1)); 	// 3

console.log(sum('1', '1', '1', '1')); 	// 4
console.log(sum('sdf', '2', '1', '1')); // 4