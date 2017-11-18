const reverse = str => {
	var res = [];
	str.split('').map(i => res.unshift(i));
	return res.join('');
}


console.log(reverse(''));                         // ''
console.log(reverse('abcdef'));                   // 'fedcba'