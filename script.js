let displayValue = '';
let firstOperand = null;
let secondOperand = null;
let currentOperator = null;

// Initialize buttons
const numberButtons = document.querySelectorAll('.number-btn');
const equalsButton = document.getElementById('equals');
const decimalButton = document.getElementById('decimal');
const divideButton = document.getElementById('divide');
const multiplyButton = document.getElementById('multiply');
const subtractButton = document.getElementById('subtract');
const addButton = document.getElementById('add');
const display = document.getElementById('displayScreen');
const lastScreen = document.getElementById('lastOperationScreen');
const acButton = document.getElementById('AC');
const ceButton = document.getElementById('CE');

// Functions
function appendDisplay(input) {
  displayValue += input;
  display.textContent = displayValue;
};

function clearDisplay() {
  displayValue = '';
  firstOperand = null;
  secondOperand = null;
  currentOperator = null;
  display.textContent = '';
}

function deleteCharFromDisplay() {
  if (display.textContent)
    display.textContent = display.textContent.slice(0, -1);
}

function setOperator(operator) {
  operator = operator;
}

function operatorButton(operator) {
  firstOperand = parseInt(displayValue);
  setOperator(operator);
  if (firstOperand !== null) {
    secondOperand = parseInt(displayValue.textContent);
    displayValue = ''
  }
  
}

// Button event listeners
numberButtons.forEach((button) => {
  button.addEventListener('click', () => appendDisplay(button.textContent));
});

decimalButton.addEventListener('click', () => {
  if (!display.textContent.includes('.')) appendDisplay('.');
});

acButton.addEventListener('click', clearDisplay);
ceButton.addEventListener('click', deleteCharFromDisplay);
divideButton.addEventListener('click', () => operatorButton('÷'));




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
      if (b === 0) return 'Cannot divide by zero';
      return divide(a, b);
    case '+':
      return add(a, b);
    case '-':
      return subtract(a, b);
    default:
      return null;
  }
};

