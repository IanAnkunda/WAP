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
