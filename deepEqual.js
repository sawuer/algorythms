const deepEqual = (a, b) => {
	var aK = Object.keys(a), bK = Object.keys(b);
	for (var i = 0; i < aK.length; i++) {
		if (
			typeof a[aK[i]] !== 'object' && 
			typeof b[bK[i]] !== 'object' && 
			a[aK[i]] !== b[bK[i]] || 
			typeof a[aK[i]] !== typeof b[bK[i]]
		) return false;
		return deepEqual(a[aK[i]], b[bK[i]]);
	}
	return true;
};




var obj = {
	val: 2,
	here: {
		is: 'an',
		some: {
			value: 43
		}
	},
};
var obj2 = {
	val: 2,
	here: {
		is: 'an',
		some: {
			value: 43
		}
	}, 
};

var obj3 = {
	val: 4,
	here: {
		is: 'an332',
		some: {
			value: 43324
		}
	},
};

console.log('Test1', deepEqual(obj, obj)); // true
	console.log('')
console.log('Test2', deepEqual(obj, obj2)); // true
	console.log('')
console.log('Test3', deepEqual(obj, obj3)); // false
	console.log('')
console.log('Test4', deepEqual(obj, {here: {is: 'an'}, object: 232})); // false
	console.log('')
console.log('Test5', deepEqual(obj, {here: 1, object: 2})); // false
