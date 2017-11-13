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
			return console.log(this.storage[this.count-1]);
		}
	}

	return constructor;

})();


var names = new Stack();

names.push({name: 'Sowyer', age: 22});
names.push('Ramona');
names.push('Linker');
console.log(names);
console.log(names.pop());
names.peek();
console.log(names);