/*
	Name exercise: Force Reaction
	Description:  calculate the reaction force and how many processes are carried out
	Autor: Thiago RG
	Date: march 20 th 2025
*/

let forceA=Number(prompt("Enter a mass: "))
let counter=0;
let forceTotal=0;
let forceR;

while(forceA!=0){
	counter++;
	forceR=forceA;
	forceTotal=forceTotal+forceA;
	forceA=Number(prompt("Enter a mass: "))
}
console.log("The total processes are: " + counter)
console.log("The reaction force is: " + forceR)
console.log("The force total is: " + forceTotal)