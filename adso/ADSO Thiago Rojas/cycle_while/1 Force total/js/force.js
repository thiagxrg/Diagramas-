/*
	Name exercise: Force
	Description: Calculate the total force and how many processes are carried out
	Autor: Thiago RG
	Date: march 19 th 2025
*/

let mass=prompt("Enter a mass");
let acceleration= prompt("enter an acceleration");

let totalForce=0;
let counter = 0;

while(mass>=0 && acceleration >=0){
	force = mass * acceleration;
	totalForce = totalForce + force;
	counter++;
	mass=prompt("Ingresa una masa");
	acceleration= prompt("Ingresa una aceleracion");
}
	console.log("Force is: " + force)
	console.log("Total force is: " + totalForce)
	console.log("A total of " + counter + " processes")