
function calculate(){

var age = Number(prompt("Please write your age"));
var maxAge = 100;
var numofDay = 2;
var totalrolls = (numofDay * 365) * (maxAge - age);
var message = 'You will need ' + totalrolls + ' swiss rolls to last you until the ripe old age of ' + maxAge;
document.getElementById('result').innerHTML= (message);
}