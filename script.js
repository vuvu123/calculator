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

// Button event listeners
numberButtons.forEach((button) => {
  button.addEventListener('click', () => appendDisplay(button.textContent));
});

operatorButtons.forEach((button) => {
  button.addEventListener('click', () => toOperate(button.textContent));
});

decimalButton.addEventListener('click', () => {
  if (!currentScreen.textContent.includes('.')) appendDisplay('.');
});

acButton.addEventListener('click', clearDisplay);
ceButton.addEventListener('click', deleteCharFromDisplay);
negateButton.addEventListener('click', negate);
percentButton.addEventListener('click', convertToPercent);
equalsButton.addEventListener('click', evaluate);

// Functions
function negate() {
  currentScreen.textContent *= -1;
}

function convertToPercent() {
  currentScreen.textContent /= 100;
  roundNumber(currentScreen.textContent);
}

function appendDisplay(input) {
  if (currentScreen.textContent === '0' || shouldResetScreen) clearCurrentScreen();
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

function toOperate(operator) {
  if (currentScreen !== null) evaluate()
  firstOperand = currentScreen.textContent;
  currentOperator = operator;
  lastScreen.textContent = `${firstOperand} ${currentOperator} `
  shouldResetScreen = true;
}

function clearCurrentScreen() {
  currentScreen.textContent = '';
  shouldResetScreen = false;
}

function roundNumber(num) {
  return Math.round(num * 100000) / 100000;
}

function evaluate() {
  if (currentOperator === null || shouldResetScreen) return;
  if (currentOperator === '÷' && currentScreen.textContent === '0') {
    alert('Cannot divide by zero');
    return;
  }

  secondOperand = currentScreen.textContent;
  lastScreen.textContent = `${firstOperand} ${currentOperator} ${secondOperand} =`;
  currentScreen.textContent = roundNumber(operate(firstOperand, secondOperand, currentOperator));
  currentOperator = null;
}

let add = (a, b) => a + b;
let subtract = (a, b) => a - b;
let multiply = (a, b) => a * b;
let divide = (a, b) => a / b;

function operate(a, b, operator) {
  a = parseFloat(a);
  b = parseFloat(b);

  switch(operator) {
    case 'x':
      return multiply(a, b);
    case '÷':
      if (b === 0) return null;
      return divide(a, b);
    case '+':
      return add(a, b);
    case '-':
      return subtract(a, b);
    default:
      return null;
  }
};