function number_case_ru(n) {
	n += '', nEnd = n.slice(-1);
	return n[n.length - 2] == 1 ? '5-0' :
				 nEnd > 1 && nEnd < 5 ? '2-4' :
				 nEnd == 1 ? '1' : '5-0';
}

console.log(number_case_ru(0) == '5-0');
console.log(number_case_ru(1) == '1');
console.log(number_case_ru(2) == '2-4');
console.log(number_case_ru(3) == '2-4');
console.log(number_case_ru(4) == '2-4');
console.log(number_case_ru(5) == '5-0');
console.log(number_case_ru(6) == '5-0');
console.log(number_case_ru(7) == '5-0');
console.log(number_case_ru(8) == '5-0');
console.log(number_case_ru(9) == '5-0');
console.log(number_case_ru(10) == '5-0');
console.log(number_case_ru(11) == '5-0');
console.log(number_case_ru(12) == '5-0');
console.log(number_case_ru(13) == '5-0');
console.log(number_case_ru(14) == '5-0');
console.log(number_case_ru(15) == '5-0');
console.log(number_case_ru(16) == '5-0');
console.log(number_case_ru(17) == '5-0');
console.log(number_case_ru(18) == '5-0');
console.log(number_case_ru(19) == '5-0');
console.log(number_case_ru(20) == '5-0');
console.log(number_case_ru(21) == '1');
console.log(number_case_ru(22) == '2-4');
console.log(number_case_ru(23) == '2-4');
console.log(number_case_ru(24) == '2-4');
console.log(number_case_ru(25) == '5-0');
console.log(number_case_ru(101) == '1');
console.log(number_case_ru(102) == '2-4');
console.log(number_case_ru(111) == '5-0');
console.log(number_case_ru(113) == '5-0');
console.log(number_case_ru(114) == '5-0');
console.log(number_case_ru(115) == '5-0');
console.log(number_case_ru(116) == '5-0');
console.log(number_case_ru(117) == '5-0');
console.log(number_case_ru(118) == '5-0');
console.log(number_case_ru(23219) == '5-0');
console.log(number_case_ru(1120) == '5-0');
console.log(number_case_ru(121) == '1');
