window.onload = function(){
"use strict";

// QUESTION 1
let person = {  //object literal
    name: "",
    dateOfBirth: "",

    getName: function(){
        return this.name;
    },
    setName: function(newName){
        this.name = newName;
    },
    getDateOfBirth: function(){
        return this.dateOfBirth;
    },
    setDateOfBirth: function(dateOfBirth){
        this.dateOfBirth = dateOfBirth;
    }

};
let john = Object.create(person);
john.setName("John");
john.setDateOfBirth(new Date("12,10,1998")); //December 10th, 1998
console.log(`The person’s name is ${john.getName()}`);
console.log(`${john.getName()} was born on ${john.getDateOfBirth()}`);

//QUESTION 2
let employee = Object.create(person);
    employee.salary = 0;
    employee.hireDate = new Date();

    employee.doJob = function (jobTitle){
        console.log(`${this.getName()} is a ${jobTitle} who earns ${this.salary}`);
    };

    const anna = Object.create(employee);
    anna.setName("Anna");
    anna.salary = 249995.50;
    anna.doJob("Programmer");


//QUESTION 3
function Person(name, dateOfBirth){
    console.log(this);
    this.name = name;
    this.dateOfBirth = dateOfBirth;
}
const peter = new Person("Peter", new Date("11,10,1985"));

Person.prototype.toString = function(){
    return `{Name: ${this.name}, DateOfBirth: ${this.dateOfBirth}}`
}

console.log(peter.toString());

//QUESTION 4

};