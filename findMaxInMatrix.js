function findMaxInMatrix(x) {
	var max = 0;
	for (var i = 0; i < x.length; i++) {
		for (var j = 0; j < x[i].length; j++) {
			max = x[i][j] > max ? x[i][j] : max;
		}
	}
	return max;
}


console.log(findMaxInMatrix(
	[
		[43,5,23,100],
		[32,546,1,6],
		[454,2,45,23],
		[9,5,56,121]
	]
)); // 546