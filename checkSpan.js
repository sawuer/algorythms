function checkSpam(str) {
	return str.toUpperCase().indexOf('XXXXX') ? true : false;
}

// checkSpam('buy ViAgRA now') == true
console.log(checkSpam('free xxxxx'));
// checkSpam("innocent rabbit") == false