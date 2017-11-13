var LinkedList = (function() {

	function constructor(...args) {
		var self = this;
		this.storage = {};
		args.forEach(i => {
			self.storage[i] = String(i); 
		});
	}

	constructor.prototype = {
		add(item) {
			if (this.storage.hasOwnProperty(item)) {
				return console.log('ERROR:', item, 'already exists')
			}
			this.storage[item] = item;
		},

		has(item) {
			if (this.storage.hasOwnProperty(item)) {
				console.log(true);
				return true;
			}
			console.log(false);
			return false;
		}
	};

	return constructor;

})();


var newLinkedList = new LinkedList(1,2,3);

console.log(newLinkedList)
newLinkedList.add(3)
console.log(newLinkedList);
newLinkedList.has(2)
// console.log(newinkedList)
// console.log(newLinkedList)