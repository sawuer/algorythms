function reduce(arr, idx, hist) {
	hist = hist || 0;
	idx = idx || 0;
	if (arr.length > idx) {
		console.log(arr[idx])
		hist += arr[idx];
		return reduce(arr, ++idx, hist);
	}
	return hist;
}

console.log(reduce([1, 2, 3, 4])); // 10