function arrayToList(arr, hist={}, idx=0) {
	if (idx < arr.length) {
		hist['value'] = arr[idx];
		hist['rest'] = {}; 
		arrayToList(arr, hist.rest,  ++idx)
	}
	return hist;
}

function listToArray(list, arr=[]) {
	if (list) {
		arr.push(list.value);
		return listToArray(list.rest, arr);
	}
	return arr;
}

// console.log(
// 	listToArray({
// 		value: 10,
// 		rest: {
// 			value: 20, 
// 			rest: {
// 				value: 30, 
// 				rest: {
// 					value: 40, 
// 					rest: null
// 				}
// 			}
// 		}
// 	})
// );
console.log(listToArray(arrayToList([10, 20, 30, 40]))[1]); 
// { 
// 	value: 10, 
// 	rest: {
// 		value: 20, 
// 		rest: {
// 			value: 30, 
// 			rest: {
// 				value: 40, 
// 				rest: null
// 			}
// 		}
// 	}
// }
