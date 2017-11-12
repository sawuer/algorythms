// function getMax(n) {
// 	var max = 0;
// 	for (var i = 0; i < n.length; i++) {
// 		max = n[i] > max ? n[i] : max;
// 	}
// 	return max;
// }

function getMax(n, idx, max) {
	max = max || 0;
	idx = idx || 0;
	if (idx < n.length - 1) {
		if (n[idx] > max)
			max = n[idx];
		return getMax(n, ++idx, max)
	}
	return max;
}

console.log(getMax([1, 10, 44, 3, 4]));