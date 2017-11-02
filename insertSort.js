function insertSort(arr) {
	for (var i = 1; i < arr.length; i++) {
		var j = i;
		do {
			if (!arr[j - 1]) return;
			var a = arr[j - 1];
			var b = arr[j];
			arr[j - 1] = b;
			arr[j] = a;
			j--;
		} while (j > 0 && arr[j] <= arr[j - 1]);
	}
	return arr;
}


console.log(insertSort([20,4,5,100,3,13,9,8,10,2,7,6]));
console.log(insertSort([2,7,1,4,8,3]));
console.log(insertSort([9,4,7,2,3,6,5,8,10,1]));

























