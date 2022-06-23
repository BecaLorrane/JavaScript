var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;

function increment(){
    currentNumber = currentNumber + 1; 
    currentNumberWrapper.innerHTML = currentNumber;
    
    if(currentNumber < 0 )
        document.getElementById("frase").style.color = "red";
    else
    document.getElementById("frase").style.color = "black";   
}

function decrement(){
    currentNumber = currentNumber - 1
    currentNumberWrapper.innerHTML = currentNumber;

    if(currentNumber < 0 )
        document.getElementById("frase").style.color = "red";
    else
    document.getElementById("frase").style.color = "black";    
}