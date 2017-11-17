function indexOf(arr, x) {
	for (var i = 0; i < arr.length; i++) {
		if (x === arr[i]) return i;
	}
	return -1;
}

console.log(indexOf([1, 2, 3], 3)); // 2
console.log(indexOf([1, 2, 3], 4)); // -1