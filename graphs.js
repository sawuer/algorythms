var graph = {
	'sowyer': ['ramona', 'linker', 'fallow'],

	'ramona': ['bob', 'peggy'],

	'linker': ['tom', 'eddie'],

	'fallow': ['tom', 'chris']
};

//            bob  peggy
//              \   /
//              ramona
//              /
//         sowyer
//         /   \
//     linker  fallow
//         \   /
// 					tom

console.log(graph);