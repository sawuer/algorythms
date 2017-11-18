function isBalanced(str) {
	var left = '', right = '';
	for (var i = 0; i < str.length; i++) {
		if (str[i] == '{') left += 'a';
		if (str[i] == '}') right += 'b';
	}
	return left, right;
}





console.log(isBalanced('}{'));                      	// false
console.log(isBalanced('{{}'));                   		// false
console.log(isBalanced('{}{}'));             				// true
console.log(isBalanced('foo { bar { baz } boo }')); 	// true
console.log(isBalanced('foo { bar { baz }'));       	// false
console.log(isBalanced('foo { bar } }'));           	// false