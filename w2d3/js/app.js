
"use strict";
//QUIZ
//Qn6
const myCalculator  = function(){

    const doAddition = function(num1, num2){
       let sum =num1+num2;
        return sum ;
        console.log(sum);
    };
    const doMultiplication = function(num1, num2){
        
        return num1*num2;
    };

    return{
        doAddition: doAddition,
        doMultiplication: doMultiplication,
        
    }
}();

console.log(myCalculator.doAddition(2,3));
console.log(myCalculator.doMultiplication(2,3));
