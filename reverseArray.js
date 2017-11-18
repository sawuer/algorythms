const reverseArray = arr => {
	var res = [];
	arr.map(i => res.unshift(i));
	return res;
}


console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];