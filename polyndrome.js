function polyndrome(str) {
	if (typeof str !== 'string') return 'Arg is not a string type';
	str = str
		.toUpperCase()
		.replace(/[^a-z0–9]/ig, '');
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
console.log(polyndrome(32423));
console.log(polyndrome());


f (x) => x * 2x;

f(12): 
f(140):

f(n) => 