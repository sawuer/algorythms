function binarySearch(list, item) {
	var low = 0;
	var high = list.length - 1;

	while (low <= high) {
		var mid = low + high;
		var guess = list[mid];
		if (guess == item) {
			return mid;
		}
		if (guess > item) {
			high = mid - 1;
		} else {
			low = mid + 1;
		}
	}
	return null;
}

console.log(binarySearch([1, 3, 5, 7, 9], 3)); // 1
console.log(binarySearch([1, 3, 5, 7, 9], -1)); // null