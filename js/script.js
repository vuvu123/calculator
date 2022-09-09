// Initialize buttons
const numberButtons = document.querySelectorAll('.number-btn');
const equalsButton = document.getElementById('equals');
const decimalButton = document.getElementById('decimal');
const divideButton = document.getElementById('divide');
const multiplyButton = document.getElementById('multiply');
const subtractButton = document.getElementById('subtract');
const addButton = document.getElementById('add');
const currentScreen = document.getElementById('currentOperationScreen');
const lastScreen = document.getElementById('lastOperationScreen');
const acButton = document.getElementById('AC');
const ceButton = document.getElementById('CE');



function appendDisplay(input) {
  currentScreen.textContent += input;
};

function clearDisplay() {
  currentScreen.textContent = '';
}

function deleteCharFromDisplay() {
  if (currentScreen.textContent)
    currentScreen.textContent = currentScreen.textContent.slice(0, -1);
}

// Button event listeners
numberButtons.forEach((button) => {
  button.addEventListener('click', () => appendDisplay(button.textContent));
});

decimalButton.addEventListener('click', () => {
  if (!currentScreen.textContent.includes('.')) appendDisplay('.');
});

acButton.addEventListener('click', clearDisplay);
ceButton.addEventListener('click', deleteCharFromDisplay);





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

