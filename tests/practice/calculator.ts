type Operation = 'add' | 'subtract' | 'multiply' | 'divide';

function calculate(firstNumber: number, secondNumber: number, operation: Operation): number {
  switch (operation) {
    case 'add':
      return firstNumber + secondNumber;
    case 'subtract':
      return firstNumber - secondNumber;
    case 'multiply':
      return firstNumber * secondNumber;
    case 'divide':
      if (secondNumber === 0) {
        throw new Error('Cannot divide by zero.');
      }
      return firstNumber / secondNumber;
  }
}

console.log(`10 + 5 = ${calculate(10, 5, 'add')}`);
console.log(`10 - 5 = ${calculate(10, 5, 'subtract')}`);
console.log(`10 * 5 = ${calculate(10, 5, 'multiply')}`);
console.log(`10 / 5 = ${calculate(10, 5, 'divide')}`);
