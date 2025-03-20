/*
	Name exercise: Grades
	Description: the performance with all the notes in total.
	Autor: Thiago RG
	Date: march 19 th 2025
*/

let gradeOne= 3.8;
let gradeTwo= 2.7;
let gradeThree=3.4;

let gradeOnePor;
let gradeTwoPor;
let gradeThreePor;

let gradeFinal;

gradeOnePor = gradeOne*0.2;
gradeTwoPor = gradeTwo*0.35;
gradeThreePor = gradeThree*0.45;

gradeFinal = gradeOnePor + gradeThreePor + gradeTwoPor; 

if(gradeFinal>=4.5){
	console.log("Superior Grade: " + gradeFinal);
}
else{
	if(gradeFinal>=3.5 && gradeFinal<4.5){
		console.log("Good Grade: " + gradeFinal);
}
else{
	if(gradeFinal>=3 && gradeFinal<3.5){
		console.log("Average Grade: " + gradeFinal);
}
else{
	console.log("Poor Grade: " + gradeFinal);
}
}
}