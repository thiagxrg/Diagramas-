/*
	Name exercise: Weight
	Description: Calculate the total weight depending on the planet
	Autor: Thiago RG
	Date: march 19 th 2025
*/
let mass=prompt("Enter the mass you want to calculate");
let option;
let additionTotal= 0;
let counter = 0;
let gravity;

while(mass>=0){
	option=prompt("Choose the planet you want to calculate the mass on: Earth = 1 - March = 2 - Jupiter = 3");
	if(option=1){
		gravity=9.81;
}
else{
	if(option=2){
		gravity=3.71;
}
else{
		gravity=24.79;
}
}

	weight=mass*gravity;
	counter++;
	additionTotal=additionTotal+weight;
	mass=prompt("Enter the mass you want to calculate");
}
	console.log("The weight is: " + weight)
	console.log("Addition Total is: " + additionTotal)
	console.log("A total of " + counter + " processes")