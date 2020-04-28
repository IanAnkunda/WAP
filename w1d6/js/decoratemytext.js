function func(){
    alert("Hello, world!");
}

function modifyText(){
    const textarea = document.getElementById("text");
    textarea.style.fontSize="24pt";
}

function changeCheck(){
    const checkbox = document.getElementById("bling");
    const textarea = document.getElementById("text");
    const body = document.getElementById("body");
    if(checkbox.checked){
        textarea.style.fontWeight ="bold";
        textarea.style.color ="green";
        textarea.style.textDecoration ="underline";
        body.style.background = "url('http://www.cs.washington.edu/education/courses/190m/CurrentQtr/labs/6/hundred-dollar-bill.jpg')";
    }else{
        textarea.style.fontWeight = "normal";
        textarea.style.color = "black";
        textarea.style.textDecoration="none"
        body.style.background ="none";
    }
}
function textLarger(){
    const textArea = document.getElementById("text");
    let fontSize = parseInt(window.getComputedStyle(document.getElementById("text")).fontSize);
    textArea.style.fontSize = fontSize + 2 + "px";
    
    // let size = parseInt(window.getComputedStyle(textarea.fontSize));
    // let size = parseInt(window.getComputedStyle(document.getElementById("textArea")).fontSize);
    // textarea.style.fontSize= size + 2 + "pt";
}

function increment(){
    setInterval(textLarger, 500);
}

function Atinlay(){

}
function transformToPigLatin() {
    const words = document.getElementById("text").value;
    const arr = words.split(' ');
    for (let i=0;i<arr.length;i++) {
        var word = arr[i];
        if (word.length > 0 && isNaN(word)) {
            arr[i] = checkConsonant(word);
        }
    }
    document.getElementById("text").value = arr.join(' ');

}

function checkConsonant(word) {
    let firstLetter = word.charAt(0)
    let result = ['a', 'e', 'i', 'o', 'u'].indexOf(firstLetter.toLowerCase());
    if (result >= 0) {
        word += 'ay';

    }
    else {
        word = word.substring(1);
        word += firstLetter + 'ay';
    }
    return word;
}

function transformMalkovitch() {
    const words = document.getElementById("text").value;
    const arr = words.split(' ');
    for (let i=0;i<arr.length;i++) {
        var word = arr[i];
        if (word.length >= 5 && isNaN(word)) {
            arr[i] = "Malkovitch";
        }
    }
    document.getElementById("text").value = arr.join(' ');
}
