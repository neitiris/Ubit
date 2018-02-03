function sum() {
	var args = Array .prototype.slice.call(arguments);
	return args.reduce(function(prev,curr){
		return prev+curr;
	},0)
}
sum(1, 2, "s");

function sum() {
	var args = Array .prototype.slice.call(arguments);
	return args.reduce(function(prev,curr){
		if (! isNaN(curr)) {
		return prev+curr;
	}
	else
		{throw Error("Non-numeric argument: " + curr);
		}
	},0)
}
sum(2, 4, 6);
sum(1, 2, "s");//error

function test(){
	sum(2,4,"s");//error "s"
	console.log("doing something else");

}

function test(){
	try
	{sum(2,4,"s");}
	catch(error){console.log(error)};
	console.log("doing something else");
}