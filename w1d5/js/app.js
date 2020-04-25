"use strict";

// No.1
function max(n1, n2) {
    if (n1 > n2) {
        return n1;
    }
    else {
        return n2;
    }
}
console.log(max(1, 3));

//No.2
function maxOfThree(n1, n2, n3) {
    if (n1 > n2 && n1 > n3) {
        return n1;
    }
    else if (n2 > n1 && n2 > n3) {
        return n2;
    }
    else if (n3 > n1 && n3 > n2) {
        return n3;
    }
}
console.log(maxOfThree(4, 17, 10));

//No.3
function isVowel(char) {
    if (char.length === 1 && (char === "a" || char === "e" || char === "i" || char === "o" || char === "u")) {
        return true;
    }
    else {
        return false;
    }
}
console.log(isVowel("e"));


//No.4
function sum(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        sum += element;
    }
    return sum;
}
function multiply(array) {
    let mul = 1;
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        mul *= element;
    }
    return mul;
}
const array = [1, 2, 3, 4];
console.log(sum(array));
console.log(multiply(array));

//No.5
function reverse(str) {
    let newStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newStr += str[i];
    }
    return newStr;
}
console.log(reverse("jag testar"));

//No.6
function findLongestWord(arr) {
    let longest;
    let len = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > len) {
            len = arr[i].length;
            longest = arr[i];
        }
    }
    return longest;
    // return arr.reduce((a, b) => a.length > b.length ? a : b);
}
const arrayWords = ["Hello", "World ", "Web"];
console.log(findLongestWord(arrayWords));

//No.7
function filterLongWords(array, j){
    return array.filter(elem=>elem.length > j);

    // let arrayWords =[];
    // for (let j = 0; j < array.length; j++) {
    //     const element = array[j];
    //     if(element.length>i){
    //         arrayWords += element;
    //     }
    // }
    // return arrayWords;
}
const arr =["Hello", "World ", "Web", "Script", "Java"];
console.log(filterLongWords(arr, 4));

//No.8
function computeSumOfSquares(inputArray){
    return inputArray.map(y=>y*y).reduce((a,b)=> a+b);
}
const inputArray = [1,2,3];
console.log(computeSumOfSquares(inputArray));

//No.9
function printOddNumbersOnly(intArray){
    return intArray.filter(a => a%2 !==0);
}
const intArray = [1,2,3,4,5];
console.log(printOddNumbersOnly(intArray));

// No.10
function computeSumOfSquaresOfEvensOnly(arrEvenarray){
    return array.filter(a=>a%2===0)
    .map(b=>b*b).reduce((a,b)=> a+b);
}
const arrEven = [1,2,3,4,5];
console.log(computeSumOfSquaresOfEvensOnly(arrEven));

// No.11
function sumReduce(arr){
    return arr.reduce((a,b)=> a+b);
}
console.log(sumReduce(array));

function mulReduce(arr){
    return arr.reduce((a,b)=> a*b);
}
console.log(mulReduce(array));

// No.12
function findSecondBiggest(arr){
    let first =arr[0];
    let second = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if(arr[i]>first){
            second=first;
            first = arr[i];
        }        
    }
    return second;
}
console.log(array);
console.log(findSecondBiggest(array))

//No.13
function printFibo(n, a,b){
    const output = [];
    output[0] = a;
    output[1] = b;
    if (n === 1) {
        return output[0];
    }
    else if (n === 2) {
        return output;
    }
    else {
        for (let i = 2; i < n; i++) {
            output[i] = output[i - 1] + output[i - 2];
        }
        return output;
    }
}
console.log("\""+ printFibo(10,0,1)+ "\", as output");

//No 14


//No 15 -- clock
function displayClock() {
    let d = new Date();
    d = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()} ${d.getHours()} :${d.getMinutes()}:${d.getSeconds()}`
    
    document.getElementById('clock').innerHTML = d;
    setTimeout(displayClock, 1000);
     }
     function display_c(){
        var refresh=1000; // Refresh rate in milli seconds
        mytime=setTimeout('display_ct()',refresh)
        }
        
    