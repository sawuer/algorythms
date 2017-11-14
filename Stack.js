// var Stack = (function() {

// 	function constructor() {
// 		this.count = 0;
// 		this.storage = {};
// 	}

// 	constructor.prototype = {
// 		push(val) {
// 			this.storage[this.count] = val;
// 			this.count++;
// 		},
// 		pop() {
// 			if (this.count === 0) return undefined;
// 			this.count--;
// 			var res = this.storage[this.count];
// 			delete this.storage[this.count];
// 			return res;
// 		},
// 		size() {
// 			return this.count;
// 		},
// 		peek() {
// 			return console.log(this.storage[this.count-1]);
// 		}
// 	};

// 	return constructor;

// })();


'use strict';


class Stack {
  constructor() {
    this.count = 0;
    this.storage = {};
  }

  push (val) {
    this.storage[this.count] = val;
    this.count++;
    return val;
  }

  pop() {
    if (this.count === 0) {
      return;
    }
    this.count--;
    var res = this.storage[this.count];
    delete this.storage[this.count];
    return 'Delete: ' + res;
  }

  size() {
    return this.count;
  }

  peek() {
    return 'Peek:', this.storage[this.count-1];
  }

  read() {
    return this.storage;
  }

}

var names = new Stack();

names.push('Sowyer');
names.push('Ramona');
names.push('Linker');
names.push('Fallow');
console.log(names.size());
console.log(names.pop());
console.log(names.peek());
console.log(names.size());
console.log(names.read());