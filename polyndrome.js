function polyndrome(str) {
	str = str.toUpperCase()
		.replace(/\./g, '')
		.replace(/\s/g, '')
		.replace(/\!/g, '')
		.replace(/\?/g, '')
		.replace(/\,/g, '');
	var half = ~~(str.split('').length / 2)
	var left = '';
	var right = [];
	for (var i = 0; i < half; i++)
		left += str[i];	
	for (var i = half; i < str.length; i++)
		right.unshift(str[i]);
	for (var i = 0; i < left.length; i++)
		if (right.join('')[i] !== left[i]) return false;
	
	console.log(left, right.join(''))
	return true;
}



console.log(polyndrome('1234321'))
console.log(polyndrome('nomelonnolemon'));
console.log(polyndrome('A man, a plan, a canal, Panama!'));