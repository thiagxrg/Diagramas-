/*
	Name exercise: Force
	Description: Calculate the distance, speed and acceleration
	Autor: Thiago RG
	Date: march 20 th 2025
*/
let mass;
let acceleration;
let counter;
let force;
let number = Number(prompt("Enter a number: "));
for(counter=1;counter<=number;counter++);{
	mass=Number(prompt("Enter a mass: "));
	acceleration=Number(prompt("Enter the acceleration: "));
	force=mass*acceleration
	console.log("The force is: " + force)
}