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

let result:number;

try {
  result = divide(10, 0);
} catch (e) {
  console.error('Error:', e.message);
  result = 0; // or handle the error appropriately
}

result = add(10, 5); // 15
result = subtract(10, 5); // 5
result = multiply(10, 5); // 50
console.log(result) // 0