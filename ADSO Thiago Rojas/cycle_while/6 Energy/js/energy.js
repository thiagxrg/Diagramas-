/*
	Name exercise: Energy
	Description: calculate the total energy and how many processes have been carried out
	Autor: Thiago RG
	Date: march 20 th 2025
*/
let mass=150
const gravity=9.81;
let energy;
let energyTotal= 0;
let height=Number(prompt("Enter the height: "));
let counter=0;

while(height>0){
	energy=mass*gravity*height;
	energyTotal = energyTotal+energy;
	counter++;
	height=Number(prompt("Enter the height: "));
}

console.log("The energy is: " + energy);
console.log("The enrgy Total is: " + energyTotal);
console.log("The total processes is: " + counter);

