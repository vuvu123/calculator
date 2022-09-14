let firstOperand = null;
let secondOperand = null;
let currentOperator = null;
let shouldResetScreen = false;

// Initialize buttons
const numberButtons = document.querySelectorAll('.operand');
const operatorButtons = document.querySelectorAll('.operator');
const equalsButton = document.getElementById('equals');
const decimalButton = document.getElementById('decimal');
const currentScreen = document.getElementById('currentOperationScreen');
const lastScreen = document.getElementById('lastOperationScreen');
const acButton = document.getElementById('AC');
const ceButton = document.getElementById('CE');
const negateButton = document.getElementById('sign');
const percentButton = document.getElementById('percent')

// Functions
function negate() {
  currentScreen.textContent *= -1;
}

function convertToPercent() {
  currentScreen.textContent /= 100;
}

function appendDisplay(input) {
  currentScreen.textContent += input;
};

function clearDisplay() {
  firstOperand = null;
  secondOperand = null;
  currentOperator = null;
  currentScreen.textContent = '0';
  lastScreen.textContent = '';
}

function deleteCharFromDisplay() {
  if (currentScreen.textContent)
    currentScreen.textContent = currentScreen.textContent.slice(0, -1);
}

function operatorButton(operator) {
  firstOperand = currentScreen.textContent;
  currentOperator = operator;
  lastScreen.textContent = `${firstOperand} ${currentOperator} `
  clearCurrentScreen();
}

function clearCurrentScreen() {
  currentScreen.textContent = '';
  shouldResetScreen = true;
}

function roundNumber() {
  if ()
}

// Button event listeners
numberButtons.forEach((button) => {
  button.addEventListener('click', () => appendDisplay(button.textContent));
});

operatorButtons.forEach((button) => {
  button.addEventListener('click', () => operatorButton(button.textContent));
});

decimalButton.addEventListener('click', () => {
  if (!currentScreen.textContent.includes('.')) appendDisplay('.');
});

acButton.addEventListener('click', clearDisplay);
ceButton.addEventListener('click', deleteCharFromDisplay);
negateButton.addEventListener('click', negate);
percentButton.addEventListener('click', convertToPercent);

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

