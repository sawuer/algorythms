var usersAges = {};


usersAges['Sowyer'] = 22;
usersAges['Ramona'] = 26;
usersAges['Linker'] = 22;

function putInHashTable(table, key, val) {
	if (table.hasOwnProperty(key)) {
		return console.log('This key already exists');
	}
	table[key] = val;
};

function deleteInHashTable(table, key) {
	delete table[key];
};

function printHashTable(table) {
	Object.keys(table).forEach(i => {
		if (typeof table[i] !== 'function') {
			console.log(i, table[i]);
		}
	});
	console.log('')
};

function getHashTableKey(table, key) {
	console.log(table[key]);
}



printHashTable(usersAges);
putInHashTable(usersAges, 'Follow', 43);
printHashTable(usersAges);
deleteInHashTable(usersAges, 'Sowyer');
printHashTable(usersAges);
deleteInHashTable(usersAges, 'Follow');
printHashTable(usersAges);
putInHashTable(usersAges, 'Follow', 433);
printHashTable(usersAges);
getHashTableKey(usersAges, 'Follow');

