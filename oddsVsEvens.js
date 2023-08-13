
function oddsVsEvens(num) {
	let odd= 0;
	let even =  0;
	let allNums = num.toString().split("")
	var result = allNums.map(Number);
	odd = result.filter(num => num % 2 !== 0).reduce((n , n2)=> n + n2 ,0) 
	even = result.filter(num => num % 2 == 0).reduce((n , n2)=> n + n2 ,0) 
	if (odd > even) {
			return "odd";
		}else if (even > odd) {
			return "even";
		}else {
			return "equal"
		}

}

oddsVsEvens(13456)

