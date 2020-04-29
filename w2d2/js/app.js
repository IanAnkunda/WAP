// "use strict";
/* QUESTION 6 */
const countObject = (function(){
    var counter = 0;
    function add() {
        counter += 1;
    }
    function reset() {
        counter = 0;
    }
    return {

        add: add,
        reset: reset,
        counter: function() {
            return counter;
        }
    }

})();
countObject.add();
console.log("count " + countObject.counter());
countObject.reset();
console.log("count " + countObject.counter());


/* QUESTION 7 */
/* 
counter is the free variable.
A free variable is one referred to by a function which is not one of its parameters or local variables.
*/


/* QUESTION 8 */
const make_adder = function (val) {
    let counter = 0;
    return function () {
        counter += val;
        console.log(counter)
    }    
};

const add5 = make_adder(5);
add5(); add5(); add5();
const add7 = make_adder(7);
add7(); add7(); add7();




/* QUESTION 9 */

/*
Using the module pattern (IIFE) can remove names from the global namespace. 
They help to avoid declaring global variables/functions.
*/

/* QUESTION 10
*/

const employee = (function () {
    let name = "";
    let age = 0;
    let salary = 0;
    // using function expression
    const getName = function () { 
        return name;
    };
    const getAge = function () {
        return age;
    };
    const getSalary = function () {
        return salary;
    };

    const setName = function (newName) {
        name = newName;
    };
    const setAge = function (newAge) {
        age = newAge;
    };
    const setSalary = function (newSalary) {
        salary = newSalary;
    }
    const increaseSalary = function (percentage) {
        newSalary = getSalary() + (getSalary() * percentage*100);
        setSalary(newSalary);
    }
    const incrementAge = function () {
        newAge =getAge + 1;
        setAge(newAge);
    }

    return {
        setName: setName,
        setAge: setAge,
        setSalary: setSalary,
        increaseSalary: increaseSalary,
        incrementAge: incrementAge,
        getInfo: function() {
            return `Name: ${name}, Age: ${name}, Salary: ${salary}`
        }
    }
})();
employee.setName('Ian');
employee.setAge(20);
employee.setSalary(10000);
console.log('employee info: ' + employee.getInfo());
employee.increaseSalary(80);
console.log('employee info: ' + employee.getInfo());

/* Question 11 */
employee.address = "";
employee.getAddress = function () {
  return employee.address;
};
employee.setAddress = function (newAddress) {
  employee.address = newAddress;
};

employee.setAddress("fairfield");
console.log(" Address: " + employee.address);
console.log(" Address: " + employee.getAddress());