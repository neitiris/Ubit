var myarray =[1,2,3]
for (var i = 0; i < myarray.length; i++) {
 console.log (myarray[i]);
}
for (var i in myarray) {
		if (myarray.hasOwnProperty(i)) {
			console.log[i];
		}
}
for (var i in myarray) {
	if (myarray.hasOwnProperty(i)) {
		console.log(i);
	}
}

delete myarray[1];

