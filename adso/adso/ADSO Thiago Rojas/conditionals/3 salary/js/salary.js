/*
	Name exercise: Salaty Person
	Description: calcular el salario neto de una persona
	Autor: Thiago RG
	Date: march 18 th 2025
*/
let salaryPer = 2700000;
let salaryMin = 1423500;
let subsiTransport = 200000;
let salaryTotal;
let healt;
let pension;
let arl;
let discounts;
let salaryDis;
let retent;
let salaryNet;

if(salaryPer<(salaryMin*2)){
         salaryTotal= salaryPer + subsiTransport
}
else{
         salaryTotal= salaryPer + 0
}

healt = salaryPer*0.12
pension= salaryPer*0.16
arl= salaryPer*0.052
discounts= healt+arl+pension
salaryDis= salaryTotal-discounts

if(salaryPer<(salaryMin*4)){
      retent=salaryDis*0.04
      salaryNet=salaryDis-retent
      console.log("The salary net the person is: " + salaryNet)
}
else{
      salaryNet=salaryDis
      console.log("The salary net the person is: " + salaryNet)
}