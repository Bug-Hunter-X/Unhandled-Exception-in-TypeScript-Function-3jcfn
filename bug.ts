function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

function multiply(a: number, b: number): number {
  return a * b;
}

function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
}

let result:number = add(10, 5); // 15
result = subtract(10, 5); // 5
result = multiply(10, 5); // 50
result = divide(10, 0); // throws an error because of the if condition