function recurring(str) {
	return str.split('')[[...new Set(str)].length] || null;
}


console.log(recurring('abcca'))
console.log(recurring('bcaba'))
console.log(recurring('abc'))