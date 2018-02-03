function odd_num(upto){
	for (var i = 0; i < upto.length; i++) {
		if (i%2=0) {
			console.log(i);
		}
	}
}

function odd_num_printer(upto,filter){
	for (var i = 0; i < upto.length; i++) {
		if (filter(i)) {
			console.log(i);
		}
	}
}
function is_odd(n)
{
	return n % 2 !=0;
}