let firstNumber = '';
let secondNumber = '';
let operator = null;
let displayValue = '';

const display = document.getElementById('display');
const numberButtons = document.querySelectorAll('.numbers');
const operatorButtons = document.querySelectorAll('.operator');
const equalsButton = document.querySelector('#equals')
const clearButton = document.querySelector('#clear');

numberButtons.forEach((button) => 
    button.addEventListener('click', () => appendNumber(button.value)));

function appendNumber(number) {
     display.textContent += number;
    
};

clearButton.addEventListener('click', () => {
  firstNumber = '';
  secondNumber = '';
  operator = null;
  display.textContent = '';


});

operatorButtons.forEach((button) => 
  button.addEventListener('click', () => setOperator(button.value)));

function setOperator(value) {
  if (operator !== null)  calculate();
   
 
  operator = value;
  firstNumber = Number(display.textContent);
  display.textContent = '';
   
};

equalsButton.addEventListener('click', calculate);

function calculate() {
  if (operator === '/' && display.textContent === '0') {
    alert("Dont divide by 0 dummy")
    secondNumber = "";
    firstNumber = "";
    operator = null
    display.textContent = ""
    return
  }
  secondNumber = Number(display.textContent);
  display.textContent = operate(operator,firstNumber,secondNumber);
}

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
     return firstNumber / secondNumber       ; 
};

function operate(operator,firstNumber,secondNumber) {  
      
    if (operator === "+") {
        return add(firstNumber,secondNumber);
    } else if (operator === "-") {
        return subtract(firstNumber,secondNumber)
  } else if (operator === "*") {
      return multiply(firstNumber,secondNumber)
  } else if (operator === "/") {
      return  divide(firstNumber,secondNumber)
    }
};






