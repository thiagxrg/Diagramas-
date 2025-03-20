/*
	Name exercise: Work Total
	Description:  calculate the total work and how many processes have been carried out
	Autor: Thiago RG
	Date: march 20 th 2025
*/
let force= 180;
let workTotal=0;
let work;
let counter=0;
let distance=Number(prompt("Enter the distance: "));

while(distance>0){
	work=force*distance;
	counter++;
	workTotal=workTotal + work;
	distance=Number(prompt("Enter the distance: "));
}

console.log("The work total is: " + workTotal);
console.log("The total processes is: " + counter);
