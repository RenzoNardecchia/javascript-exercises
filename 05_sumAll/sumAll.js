const sumAll = function(num1, num2) {
    let numbersAdded = 0;

    // Checks if the arguments aren't negative or aren't a number vv
    if(num1 < 0 || num2 < 0) return 'ERROR';
    if(!Number.isInteger(num1) || !Number.isInteger(num2)) return 'ERROR';

    // The operation starts here vv
    if (num1 < num2){
        for(let i = num1; i <= num2; i++){
            numbersAdded += i;
        }
    } else if (num1 > num2){
        for(let i = num2; i <= num1; i++){
            numbersAdded += i;
        }
    }

    return numbersAdded;
};


// Do not edit below this line
module.exports = sumAll;
