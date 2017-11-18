const missing = arr => {
	arr.sort((a, b) => a > b);
	var res = [], idx = arr.length - 1;
	for (var i = Math.max(...arr); i > 0; i--) {
		i != arr[idx] ? res.unshift(i) : idx--;
	}
	return !res[0] ? undefined : res;
}


console.log(missing([1, 5, 3, 7, 10]));  // 2, 4, 6, 8, 9
console.log(missing([2, 3, 4]));         // 1
console.log(missing([5, 1, 4, 2]));      // 3
console.log(missing([1, 2, 3, 4]));      // undefined
console.log(missing([6, 10]));           // 1,2,3,4,5,7,8,9
