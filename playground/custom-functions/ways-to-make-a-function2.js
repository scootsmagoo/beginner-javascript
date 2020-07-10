// function doctorize(name){
// 	return `Dr. ${name}`;
// }
// const penis = doctorize('Jesus');
// console.log(penis);

//function expression
const doctorize = function(firstName){
	return `Dr. ${firstName}`;
};

//arrow function

// function inchToCM(inches){
// 	return inches * 2.54;
// }

// const inchToCM = function(inches){
// 	return inches * 2.54;
// }

// const inchToCM = (inches) => {
// 	return inches * 2.54;
// }

const inchToCM = inches => inches * 2.54;