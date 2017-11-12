var usersAges = [
	['Sowyer', 22],
	['Ramona', 26],
	['Linker', 24]
];


function getFromHashTable(table, key) {
	table.some(el => {
		if (el[0] == key) {
			return console.log(el[1])
		}
	});
}

console.log(usersAges)
getFromHashTable(usersAges, 'Linker');