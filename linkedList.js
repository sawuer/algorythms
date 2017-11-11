function passThroughLinkedList(list) {
  while (list) {
    console.log(list.value);
    list = list.next;
  }
}

var list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

console.log(passThroughLinkedList(list));