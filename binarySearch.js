function binarySearch(arr, x) {
  var beg = 0;
  var end = arr.length - 1;
  var res = -1;
  while (beg <= end) {
    var mid = (beg + end) / 2;
    if (arr[mid] <= x) {
      beg = mid + 1;
      res = mid;
    } else {
      end = mid - 1;
    }
  }
	return res;
}



console.log(binarySearch([1, 3, 5, 7, 9], 5)); // 1
console.log(binarySearch([1, 3, 5, 7, 9], 6)); // 3
console.log(binarySearch([1, 3, 5, 7, 9], -1)); // null