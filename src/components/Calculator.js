import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [currentInput, setCurrentInput] = useState('0');
  const [previousInput, setPreviousInput] = useState('');
  const [operator, setOperator] = useState('');
  const [shouldResetScreen, setShouldResetScreen] = useState(false);

  const handleNumber = (number) => {
    if (currentInput === '0' || shouldResetScreen) {
      setCurrentInput(number);
      setShouldResetScreen(false);
    } else {
      setCurrentInput(currentInput + number);
    }
  };

  const handleOperation = (op) => {
    if (operator !== '') handleEquals();
    setPreviousInput(currentInput);
    setOperator(op);
    setShouldResetScreen(true);
  };

  const handleEquals = () => {
    if (operator === '') return;
    const result = calculate(previousInput, currentInput, operator);
    setCurrentInput(result.toString());
    setPreviousInput('');
    setOperator('');
  };

  const handleDecimal = () => {
    if (!currentInput.includes('.')) {
      setCurrentInput(currentInput + '.');
    }
  };

  const handleReset = () => {
    setCurrentInput('0');
    setPreviousInput('');
    setOperator('');
  };

  const calculate = (a, b, operator) => {
    const numA = parseFloat(a);
    const numB = parseFloat(b);
    switch (operator) {
      case 'add':
        return numA + numB;
      case 'subtract':
        return numA - numB;
      case 'multiply':
        return numA * numB;
      case 'divide':
        return numA / numB;
      default:
        return b;
    }
  };

  return (
    <div className="calculator">
      <div id="display" className="display">{currentInput}</div>
      <div className="calculator-buttons">
        <button className="btn btn-secondary" onClick={() => handleNumber('7')}>7</button>
        <button className="btn btn-secondary" onClick={() => handleNumber('8')}>8</button>
        <button className="btn btn-secondary" onClick={() => handleNumber('9')}>9</button>

        <button className="btn btn-secondary" onClick={() => handleNumber('4')}>4</button>
        <button className="btn btn-secondary" onClick={() => handleNumber('5')}>5</button>
        <button className="btn btn-secondary" onClick={() => handleNumber('6')}>6</button>

        <button className="btn btn-secondary" onClick={() => handleNumber('1')}>1</button>
        <button className="btn btn-secondary" onClick={() => handleNumber('2')}>2</button>
        <button className="btn btn-secondary" onClick={() => handleNumber('3')}>3</button>

        <button className="btn btn-secondary" onClick={handleDecimal}>.</button>
        <button className="btn btn-secondary" onClick={() => handleNumber('0')}>0</button>

        <button className="btn btn-primary" onClick={() => handleOperation('add')}>+</button>
        <button className="btn btn-primary" onClick={() => handleOperation('subtract')}>-</button>
        <button className="btn btn-primary" onClick={() => handleOperation('multiply')}>x</button>
        <button className="btn btn-primary" onClick={() => handleOperation('divide')}>/</button>
        <button className="btn btn-success w-100 mt-2" onClick={handleReset}>Reset</button>
        
        <button className="btn btn-danger w-100 mt-2" onClick={handleEquals}>=</button>                  
      </div>
    </div>
  );
};

export default Calculator;
