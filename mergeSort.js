var arr  = [4,2,1,8,6,3,7,5];

function mergeSort(arr) {
	var half = arr.length / 2;
	var left = [];
	var right = [];
	for (var i = 0; i < half; i++)
		left.push(arr[i]);
	for (var i = half; i < arr.length; i++)
		right.push(arr[i]);

	console.log(left, right);

}


function mergeSort(arr) {
	for (var i = 0; i < arr.length - 1; i++) {
		for (var j = 0; j < (arr.length-1)-1; j++) {
			
		}
	}

}



console.log(mergeSort(arr));


// aInd = 0, bInd = 0;
// aInd < bInd === true => push(aInd:1), aInd++