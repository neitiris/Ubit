function greetMe(name)
{
	var today = new Date();
	allert("Hello" + name + ", today is " + today.toDateString());
}

greetMe("World");