var myarray= [64,34,2,5,6,8];
myarray.sort();
function num_comparator(a,b)
{
	return(a-b);
}
myarray.sort(num_comparator);
