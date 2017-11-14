var A = [1,2,3];
var B = [1,2,3];

var res = [];

for (var a = 0; a < A.length; a++) {
	for (var b = 0; b < B.length; b++) {
		res.push(A[a] + B[b]);
	}
}


console.log(res); // 2, 3, 4, 3, 4, 5, 4, 5, 6