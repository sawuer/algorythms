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

// Adjancenty graph

// a   c
//  \ /
//   b

// 		  a b c
//		a 0 1 0
//		b 1 0 1
//	 	c 0 1 0


var adjGraph = [
 	[0,1,0], // a
	[1,0,1], // b
  [0,1,0]  // c
];