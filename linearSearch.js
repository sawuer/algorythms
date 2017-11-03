function linearSearch(arr, findingNum) {
	for (var i = arr.length; i >= 0; i--) {
		if (arr[i] === findingNum) 
			return arr.indexOf(findingNum);
	}
}


console.log(linearSearch([7,5,6,2,10,1,3,8,4], 4)); // 4