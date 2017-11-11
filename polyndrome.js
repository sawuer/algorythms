function polyndrome(str) {
	var half = ~~(str.split('').length / 2)
	var left = '';
	var right = '';
	for (var i = 0; i < half; i++)
		left += str[i];	
	for (var i = half; i < str.length; i++) {
		right += str[i];
	}
	var reverseRight = '';
	for (var i = right.length - 1; i > 0; i--) {
		reverseRight += right[i];
	}
	for (var i = 0; i < reverseRight.length; i++) {
		if (reverseRight[i] !== left[i]) return false;
	}
	return true;
}



console.log(polyndrome('1234321'))
console.log(polyndrome('nomelonnolemon'));
console.log(polyndrome('abcdedcba'));