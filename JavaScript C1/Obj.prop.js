var circle = {};
circle.radius = 4;
console.log(circle.radius)

var book ={};
book["title"]= "a tale of two cities";
console.log(book["title"]);
delete book.title;

var book={title : "a tale of two cities", author : "Charles Dickens"};
for(var p in book){
	console.log(p + ":"+ book[p]);
}
book.valueOf();
var x = new Number(5);
x.valueOf();
x.toString();