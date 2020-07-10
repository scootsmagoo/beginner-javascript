//function definition
let bill = 100;
const taxRate = 0.13;

function calculateBill(billAmount, taxRate = 0.13, tipRate = 0.15){
	//function body
	console.log(billAmount, taxRate);
	const total = billAmount +  billAmount * taxRate + billAmount * tipRate;
	return total;
}

//function call/run

const myTotal = calculateBill(100);
const myTotal2 = calculateBill(665, 0.13);
console.log(myTotal);
console.log(myTotal2);


function sayHiTo(firstName){
	return `hello ${firstName}`;
}

const greeting = sayHiTo('hitler');
console.log(greeting);

function doctorize(name){
	return `Dr. ${name}`;
}

const heil = doctorize('hitler');
console.log(heil);

function yell(name = 'Adolf Hitler'){
	return `HEY ${name.toUpperCase()}`;
}

const shout = yell('hitler');
console.log(shout);

const myBill4 = calculateBill(100, undefined,0.2);
console.log(myBill4);