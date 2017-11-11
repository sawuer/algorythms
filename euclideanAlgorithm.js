function euclideanAlgorithm (x, y) {
	return x % y != 0 ? euclideanAlgorithm(y, x % y) : y;
}



console.log(euclideanAlgorithm(640, 400)) // 80
console.log(euclideanAlgorithm(1680, 440)) // 40



// 		   640
// ................ 
// .              .
// .              . 400
// .              .
// ................

// 240 > 160 > (80 + 80)