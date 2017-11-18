function arrayToList(arr, hist={}, idx=0) {
	if (idx < arr.length) {
		hist['value'] = arr[idx];
		hist['rest'] = {}; 
		arrayToList(arr, hist.rest,  ++idx)
	}
	return hist;
}


console.log(arrayToList([10, 20, 30, 40])); 
// { 
// 	value: 10, 
//	rest: {
// 		value: 20, 
//		rest: {
// 			value: 30, 
//			rest: {
// 				value: 40, 
//				rest: null
// 			}
// 		}
// 	}
// }
