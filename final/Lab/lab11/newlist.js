// homework explanation
// original list below
var stuff=[20,"hat","pow",25];
//         0    1    2     3
// list numbers always are starting from 0 frist

stuff[1]="cat"; // replace "hat", now become "cat"
stuff[2]=stuff[1]; // replace "pow", now become "cat"
stuff[0]=stuff[3]+10; // replace "20", now become 25, 25 + 10 , the number is 35 now.
stuff[3]=stuff[0]+stuff[0]; // replaced list number 3 (35) + replaced list 3 number(35)  35+35=75, list 3 now is 70

console.log(stuff);
// print new list below
//[ 35, 'cat', 'cat', 70 ]

var alist["dog","cat",3,10];
alist[2-1]="tree";
alist[alist[2]]=alist[0];

console.log(alist);
