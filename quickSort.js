function quickSort(arr) {
  if (arr.length < 2) {
    return arr;
  } else {
    let pivot = arr[0];
    let less = arr.slice(1).filter(el => el <= pivot);
    let greater = arr.slice(1).filter(el => el > pivot);
    console.log(less, greater)
    return quickSort(less).concat([pivot], quickSort(greater));
  } 
}

console.log(quickSort([10, 5, 2, 3]));