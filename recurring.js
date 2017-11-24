const recurring = str => str[new Set(str).size] || null;﻿

console.log(recurring('abcca'))
console.log(recurring('bcaba'))
console.log(recurring('abc'))