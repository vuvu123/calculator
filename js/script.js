// DOM
const numberButtons = document.querySelectorAll(".number-btn");
const equalsButton = document.getElementById("equals");
const decimalButton = document.getElementById("decimal");
const divideButton = document.getElementById("divide");
const multiplyButton = document.getElementById("multiply");
const subtractButton = document.getElementById("subtract");
const addButton = document.getElementById("add");
const currentScreen = document.getElementById("currentOperationScreen");
const lastScreen = document.getElementById("lastOperationScreen");

function appendDisplay(input) {
  currentScreen.textContent += input;
};

numberButtons.forEach((button) => {
  button.addEventListener("click", () => appendDisplay(button.textContent));
});

let add = (a, b) => a + b;
let subtract = (a, b) => a - b;
let multiply = (a, b) => a * b;
let divide = (a, b) => a / b;

function operate(a, b, operator) {
  a = parseInt(a);
  b = parseInt(b);

  switch(operator) {
    case 'x':
      return multiply(a, b);
    case '÷':
      if (b === 0) return null
      return divide(a, b);
    case '+':
      return add(a, b);
    case '-':
      return subtract(a, b);
    default:
      return null;
  }
};

