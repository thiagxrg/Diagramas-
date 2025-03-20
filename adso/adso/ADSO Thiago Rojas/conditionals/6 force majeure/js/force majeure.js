/*
	Name exercise: Force majeure
	Description: calculate if the forces are equal or which is greater
	Autor: Thiago RG
	Date: march 19 th 2025
*/

let massOne = 18;
let massTwo = 12;
const gravity = 9.81;
let forceOne;
let forceTwo;

forceOne = massOne*gravity;
forceTwo = massTwo*gravity;

if(forceOne == forceTwo){
	console.log("The forces are equal");
}
else{
	if(forceOne > forceTwo){
		console.log("Force One is majeure");
}
else{
	console.log("Force Two is majeure");
}
}

