// functions: push, pop, peek, length

var Stack = (function() {

	function constructor() {
		this.count = 0;
		this.storage = {};
	}

	constructor.prototype = {
		push(val) {
			this.storage[this.count] = val;
			this.count++;
		},
		pop() {
			if (this.count === 0) return undefined;
			this.count--;
			var res = this.storage[this.count];
			delete this.storage[this.count];
			return res;
		},
		size() {
			return this.count;
		},
		peek() {
			return this.storage[this.count-1];
		}
	}

	return constructor;

})();


var names = new Stack();
console.log(names.prototype)

names.push('Sowyer');
names.push('Ramona');
names.push('Linker');
console.log(names);
names.pop();
// names.peek();
console.log(names);