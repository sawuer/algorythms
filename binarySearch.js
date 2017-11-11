function binarySearch(list, item) {
  let low = 0, high = list.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (list[mid] === item) return mid;
    if (list[mid] > item) high = mid - 1;
    else low = mid + 1;
  }
  return null;
}

console.log(binarySearch([1, 3, 5, 7, 9, 11], 5)); // 2
console.log(binarySearch([1, 3, 5, 7, 9], 1)); // 0
console.log(binarySearch([1, 3, 5, 7, 9], -1)); // null