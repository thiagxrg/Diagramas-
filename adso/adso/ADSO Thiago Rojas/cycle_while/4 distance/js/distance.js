/*
	Name exercise: Distance Total
	Description: Calculate the distance, speed and acceleration
	Autor: Thiago RG
	Date: march 20 th 2025
*/
let force=Number(prompt("Enter a force: "));
let mass=Number(prompt("Enter a mass: "));
let velocity = 0;
let disTotal=0;
let secons=0;
let time= 1;
let acceleration;
while(force!=0){
	acceleration=force/mass;
	velocity=velocity+(acceleration*time);
	disTotal=velocity*time;
	secons++;
	force=Number(prompt("Enter a force: "));
}
console.log("The seconds are: " + secons);
console.log("Distance Total is : " + disTotal);
console.log("Acceleration is: " + acceleration);
console.log("Velocity is: " + velocity);

