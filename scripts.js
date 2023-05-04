
const firstNumber = 0;
const secondNumber = 0;
const operator = null;
const displayValue = 0


const display = document.getElementById('display')





function add(firstNumber,secondNumber) {
    return firstNumber+secondNumber;
}

function subtract(firstNumber,secondNumber) {
    return firstNumber-secondNumber;
}

function multiply(firstNumber,secondNumber) {
    return firstNumber * secondNumber; 
}

function divide(firstNumber,secondNumber) {
    return firstNumber / secondNumber; 
}

function operate(operator,firstNumber,secondNumber) {  
    if (operator = "+") {
        return add(firstNumber,secondNumber);
    } else if (operator = "-") {
        return subtract(firstNumber,secondNumber)
    } else if (operator = "*") {
        return multiply (firstNumber,secondNumber)
    } else if (operator = "/") {
       return  divide(firstNumber,secondNumber)
    }
}

function append(number)


function setOperator(value)
firstNumber = display.textContent;

function calculate()
