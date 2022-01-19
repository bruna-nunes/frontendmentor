var result = 0;
var operation = null;

function addNumber(number) {
    if((document.getElementById("result").innerText).length <16){
        
        document.getElementById("result").innerText += number
    }  
}

function  del() {
    document.getElementById("result").innerText = "";
}

function addOperation(op){
    if(op != operation){
        operation = op;
        result = document.getElementById("result").innerText == "" ? parseFloat(result) : parseFloat(document.getElementById("result").innerText);
        document.getElementById("pre-result").innerText = result + " "+ operation;
        document.getElementById("result").innerText = "";
        
    } 
}

function calcResult() {
    
    var numberMonitor = parseFloat(document.getElementById("result").innerText)
    result = parseFloat(result);
    
    if(operation == "+") {
        result = result + numberMonitor;
    } else if(operation == "-"){
        result = result - numberMonitor;
    } else if(operation == "*"){
        result = result * numberMonitor;
    } else if(operation == "/"){
        result = result / numberMonitor;
    } else {
        result = numberMonitor;
    }
    document.getElementById("pre-result").innerText += " "+numberMonitor;
    document.getElementById("result").innerText = result;  
    operation = null;
    numberMonitor = 0;
    
          
}

function reset(){
    result = 0;
    operation = null;
    document.getElementById("result").innerText = "";
}

const $html = document.querySelector('html');
const $theme1 = document.querySelector('#theme-1');
const $theme2 = document.querySelector('#theme-2');
const $theme3 = document.querySelector('#theme-3');

$theme1.addEventListener('change', function(){
    $html.classList.remove('theme-2')
    $html.classList.remove('theme-3')
    $html.classList.add('theme-1')
})

$theme2.addEventListener('change', function(){
    $html.classList.remove('theme-1')
    $html.classList.remove('theme-3')
    $html.classList.add('theme-2')
})

$theme3.addEventListener('change', function(){
    $html.classList.remove('theme-1')
    $html.classList.remove('theme-2')
    $html.classList.add('theme-3')
})