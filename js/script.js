const displayValue = document.querySelector("#currentOperationScreen");

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

function populateDisplay(input) {
  displayValue.textContent += input;
};