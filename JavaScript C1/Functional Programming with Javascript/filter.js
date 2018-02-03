
function iseven(elem){
	return elem%2 = 0;
}
[2,3,4,6,7,12,15].filter(iseven);
[2,3,4,6,7,12,15].filter(function(elem));
{return elem%2==0;}



function iseven(current, index, array){
	console.log(current + " :: "+ index + " :: "+ array);
	return elem%2 = 0;
}