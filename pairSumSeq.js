function pairSumSeq(arr, hist=[], idx=1) {
	if (arr.length <= 2) {
		return arr;
	} 
	if (idx < arr.length-1) {
		hist.push(arr[idx-1] + arr[idx+1]);
		return pairSumSeq(arr, hist, ++idx);
	}
	return hist;
}


console.log(pairSumSeq([1,2,3,4,5,6,7,8])); // => 4, 6, 8, 10, 12, 14
console.log(pairSumSeq([1,2,3])); // 4
console.log(pairSumSeq([1,1])); // [1,2]
console.log(pairSumSeq([1])); // [1]