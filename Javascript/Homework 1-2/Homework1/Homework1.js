

function pow(x, n) {
	var result =1;
	
	for (var i = 0; i < n; i++) {
		result *=x;
	}
	return result;
}
var x = prompt("Число", "");
var n = prompt("Степень", "");

var final_result = pow(x, n);
console.log (final_result);