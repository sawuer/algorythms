function twiceMult(arr, hist=[], idx=0) {
	if (arr.length < 2) {
		return arr;
	}
	if (idx < arr.length) {
		hist.push(arr[idx+1] ? arr[idx] + arr[idx+1] : `and ostatok ${arr[idx]}`);
		return twiceMult(arr, hist, (idx+=2));
	}
	return hist;
}

console.log(twiceMult([1,2,3,4,5,6,7,8])); // [3, 7, 11, 15]
console.log(twiceMult([1,2,3,4])); // [3,7] 
console.log(twiceMult([1,2])); // [3]
console.log(twiceMult([1])); // [1]
console.log(twiceMult([1,2,3,4,5])); // [3,7, 'and ostatok 5']
