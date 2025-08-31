// Write a JavaScript program to find the largest of five numbers.

var a = -5;
var b = -2;
var c = -6;
var d = 0;
var e = -1;


if (a>b&& a>c&& a>d&& a>e){
    console.log(a+' is the largest');
}
   
else if (b>a&& b>c&& b>d&& b>e)
{
    console.log(b+' is the largest');
}
else if (c>a&& c>b&& c>d&& c>e)
{
    console.log(c+' is the largest');
}
else if (d>a&& d>b&& d>c&& d>e)
{
    console.log(d+' is the largest');
}
else
{
    console.log(e+' is the largest');
}


// // Short and easy way to find the largest of five numbers

// var a = -5, b = -2, c = -6, d = 0, e = -1;
// var largest = Math.max(a, b, c, d, e);
// console.log(largest + ' is the largest');
