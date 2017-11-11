function isSorted(arr) {
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] > arr[i + 1]) {
			return false;
		}
	}
	return true;
}



console.log(isSorted([]))             						// true
console.log(isSorted([-Infinity, -5, 0, 3, 9]));  // true
console.log(isSorted([3, 9, 10, 23, -3, 10]));    // false