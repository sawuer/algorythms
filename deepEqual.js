const deepEqual = (a, b) => {
	var aKeys = Object.keys(a), bKeys = Object.keys(b);
	for (var i = 0; i < aKeys.length; i++) {
		// console.log(a[aKeys[i]], b[bKeys[i]])
		if (a[aKeys[i]] !== b[bKeys[i]] && typeof a[aKeys[i]] !== 'object' && typeof b[bKeys[i]] !== 'object') {
			return false;
		} else {
			return deepEqual(a[aKeys[i]], b[bKeys[i]]);
		}
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

console.log(deepEqual(obj, obj2)); // true
console.log(deepEqual(obj, obj3)); // false
// → true
// console.log(deepEqual(obj, {here: {is: 'an'}, object: 2}));
// // → true
// console.log(deepEqual(obj, {here: 1, object: 2}));
// → false