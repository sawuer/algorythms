function bubbleSort(arr) {
  arr.forEach(() => {
    arr.forEach((i, idx) => {
      if (i > arr[idx + 1]) {
        arr[idx] = arr[idx + 1];
        arr[idx + 1] = i;
      }
    });
  });
  return arr;
}


console.log(bubbleSort([0,20,4,5,100,3,13,9,8,10,4,2,7,6]));
console.log(bubbleSort([2,3,7,1,4,1,8,3]));
console.log(bubbleSort([9,4,7,2,3,6,5,8,10,1]));