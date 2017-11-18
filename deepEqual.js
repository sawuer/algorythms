
const deepEqual = (a, b) => {
	console.log(a)
};





var obj = {
	here: {
		is: 'an'
	}, 
	object: 2
};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: {is: 'an'}, object: 2}));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false