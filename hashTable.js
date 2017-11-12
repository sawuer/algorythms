var hashTable = {};


hashTable['Sowyer'] = 22;
hashTable['Ramona'] = 26;
hashTable['Linker'] = 22;

function putInHashTable(table, key, val) {
	return table[key] = val;
};

function deleteInHashTable(table, key) {
	return delete table[key];
};

function printInHashTable(table) {
	Object.keys(table).forEach(i => {
		if (typeof table[i] !== 'function')
			console.log(i, table[i]);
	});
	console.log('')
};



printInHashTable(hashTable);
putInHashTable(hashTable, 'Follow', 43);
printInHashTable(hashTable);
deleteInHashTable(hashTable, 'Sowyer');
printInHashTable(hashTable);
