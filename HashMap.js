var HashMap = (function() {

	function constructor() {
		this.size = 0;
		this.storage = [];
	}

	constructor.prototype = {
		
		set(key, val) {
			if (this.storage.length > 0) {
				for (var i = 0; i < this.storage.length - 1; i++) {
					if (this.storage[i][0] === key) {
						return console.log('Already exist');
					}
				}
			} 
			this.storage.push([key, val]);
			this.size++;		
		},

		get(key) {
			this.storage.forEach(i => {
				if (i[0] === key) {
					return console.log(i[1]);
				}
			});
		},

		delete(key) {
			this.storage.forEach(i => {
				if (i[0] === key) {
					this.storage.splice(i, 1);
					this.size--;
					return;
				}
			});
		}
	};

	return constructor;

})();


var ages = new HashMap();

console.log(ages);
ages.set('Sowyer', 22);
console.log(ages);
ages.set('Ramona', 23);
console.log(ages);
ages.set('Ramona', 32);
console.log(ages);