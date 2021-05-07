//var lunchFood=["nachos","pizza","soup","stir fry"];
//var num=[1,2,3,4];
//for(var i=0; i<4; i++){
  //  console.log(num[i]);
//}
var total=0;
var cost=[12.5,123,144,250];
for(var i=0; i<4; i++){
  total=total+cost[i];
  console.log(cost[i]);
}
console.log(total);


var temps=[77,85,89,65];
for(var i=0; i<temps.length; i++){
  var element=temps[3];

  console.log(element);
}

var temps=[77,85,89,65];
for(var i=0; i<temps.length; i++){
  var elementA=temps[i];
  if(elementA==85){
    console.log("element found at"+" " +i);
  }
  else {
    console.log("element not found!");
  }
}


//console.log(lunchFood);
