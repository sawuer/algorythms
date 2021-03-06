function pow(base, idx) {
  return idx != 0 ? base * pow(base, --idx) : 1;
}

function pow(base, idx) {
 var res = base;
 for (var i = idx - 1; i > 0; i--) {
   res *= base;
 }
 return res;
}


console.log(pow(3, 2)); // 9
console.log(pow(2, 2)); // 4
console.log(pow(2, 4)); // 16
console.log(pow(10, 5)); // 100000
