const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(numbers) {
  let totalNumbers = numbers.reduce((total, num)=>{
    return total + num;
  }, 0);
  return totalNumbers;
};

const multiply = function(numbers) {
  let totalNumber = numbers[0];
    for(let i = 1; i < numbers.length; i++){
        totalNumber *= numbers[i];
    }
  return totalNumber;
};

const power = function(num1, num2) {
	return num1 ** num2;
};

const factorial = function(number) {
	let totalNumber = 1;
    for(let i = 1; i <= number; i++){
        totalNumber *= i;
    }
    return totalNumber;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
