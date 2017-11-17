function missing(arr) {
	arr = arr.sort((a, b) => a > b);
	var missing = [], idx = arr.length - 1;
	for (var i = Math.max(...arr); i > 0; i--) {
		i !== arr[idx] ? missing.push(i) : idx--;
	}
	return missing.length == 0 ? undefined : missing.sort((a, b) => a > b);
}


console.log(missing([1, 5, 3, 7, 10]));           // 2, 4, 6, 8, 9
console.log(missing([2, 3, 4]));                  // 1
console.log(missing([5, 1, 4, 2]));               // 3
console.log(missing([1, 2, 3, 4]));               // undefined