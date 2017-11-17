function reverse(str) {
	if (str.length == 0) return str;
	var res = '';
	for (var i = str.length - 1; i > 0; i--) {
		res += str[i];
	}
	return res;
}


console.log(reverse(''));                         // ''
console.log(reverse('abcdef'));                   // 'fedcba'