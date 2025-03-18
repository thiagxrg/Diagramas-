/*
	Name exercise: Ages
	Description: Identify if three ages are older or younger
	Autor: Thiago RG
	Date: march 18th 2025
*/

let ageOne=18;
let ageTwo=16;
let ageThree=21;
let average;
let addition;


if(ageOne>=18){
	console.log("The person one is adult");
}
else{
	console.log("The person one is child");
}
if(ageTwo>=18){
	console.log("The person two is adult");
}
else{
	console.log("The person two is child");
}
if(ageThree>=18){
	console.log("The person three is adult");
}
else{
	console.log("The person three is child");
}


addition= ageOne+ageTwo+ageThree;

average=addition/3;

if(average>=18){
          console.log("Are of legal age");
}
else{
          console.log("They are not of ilegal age");
}