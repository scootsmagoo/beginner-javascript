// Function Definition
function calculateBill(billAmount, taxRate = 0.13, tipRate = 0.15) {
  // this is the function body
  console.log('Running Calculate Bill!!');
  const total = billAmount + billAmount * taxRate + billAmount * tipRate;
  return total; //return is used to allow for a variable declared within a function to be used outside of that function.  JS employs block scoping, which leads to variables defined within functions to only be accessible within that function.  When "return" is used within the function it will allow the variable being returned to be accessible outside of the function from which it was originally defined.
}

// Function Call. Or **Run**
const myTotal = calculateBill();
const wesTotal = 500;
const wesTaxRate = 0.3;
// const myTotal = calculateBill(wesTotal, wesTaxRate);

// Function Definition
function sayHiTo(firstName) {
  return `Hello ${firstName}`;
}

// const greeting = sayHiTo('Wes');
// console.log(greeting);

function doctorize(name) {
  return `Dr. ${name}`;
}

function yell(name = 'Silly Goose') {
  return `HEY ${name.toUpperCase()}`;
}

const myBill4 = calculateBill(100, undefined, 0.2);
console.log(myBill4);
