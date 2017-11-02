var left  = [1,3,5,8];
var right = [2,4,6,7];

function mergeSort(a, b) {
	var newArr = [];
	for (var i = 0; i < a.length; i++) {
		newArr.push(a[i] < b[i] ? a[i] : b[i]);
	}
}


console.log(mergeSort(left, right));
