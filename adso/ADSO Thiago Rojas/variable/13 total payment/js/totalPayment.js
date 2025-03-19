/*
	Name exercise: Total Payment
	Description: Total payment of a person
	Autor: Thiago RG
	Date: march 18 th 2025
*/
let daysWorked = 30;
let valueDay = 60000;
let salary;
let healt;
let pension;
let arl;
let discountTotal;
let salaryNet;

salary = daysWorked*valueDay;
healt = salary *0.12;
pension = salary * 0.16;
arl= salary* 0.052;

discountTotal= healt + pension + arl ;
salaryNet= salary-discountTotal;

console.log("The salary is: " + salary);
console.log("Healt is: " + healt);
console.log("Arl is: " + arl);
console.log("Pension is: " + pension);
console.log("The discoun total is: " + discountTotal);
console.log("The salary net is: " + salaryNet);