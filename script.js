// script.js
let history = '';
let currentInput = '0';
let operator = null;
let memory = 0;

function clearAll() {
  history = '';
  currentInput = '0';
  operator = null;
  updateDisplay();
}

function clearEntry() {
  currentInput = '0';
  updateDisplay();
}

function appendNumber(num) {
  if (currentInput === '0') currentInput = '';
  currentInput += num;
  updateDisplay();
}

function appendDecimal() {
  if (!currentInput.includes('.')) currentInput += '.';
  updateDisplay();
}

function setOperator(op) {
  if (operator) calculate();
  history = `${currentInput} ${op}`;
  operator = op;
  currentInput = '0';
  updateDisplay();
}

function toggleSign() {
  currentInput = (parseFloat(currentInput) * -1).toString();
  updateDisplay();
}

function calculate() {
  if (!operator) return;
  const prev = parseFloat(history.split(' ')[0]);
  const curr = parseFloat(currentInput);
  let result = 0;

  switch (operator) {
    case '+': result = prev + curr; break;
    case '-': result = prev - curr; break;
    case '*': result = prev * curr; break;
    case '/': result = prev / curr; break;
    case '%': result = prev % curr; break;
  }

  currentInput = result.toString();
  operator = null;
  history = '';
  updateDisplay();
}

function calculateAdvanced(type) {
  const value = parseFloat(currentInput);
  let result = 0;

  switch (type) {
    case 'sqrt': result = Math.sqrt(value); break;
    case 'pow': result = Math.pow(value, 2); break;
    case 'sin': result = Math.sin(value * (Math.PI / 180)); break;
    case 'cos': result = Math.cos(value * (Math.PI / 180)); break;
    case 'tan': result = Math.tan(value * (Math.PI / 180)); break;
    case 'log': result = Math.log10(value); break;
    case 'pi': result = Math.PI; break;
    case 'e': result = Math.E; break;
  }

  currentInput = result.toString();
  updateDisplay();
}

function updateDisplay() {
  document.getElementById('history').textContent = history;
  document.getElementById('output').textContent = currentInput;
}
