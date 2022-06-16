const fibonacci = function(number) {
    let num1 = 0;
    let num2 = 1;
    let nextTerm;
    if (+number < 0){
        return 'OOPS';
    } else if(+number == 1){
        return 1;
    } else{
        for (let i = 2; i <= +number; i++) {
            nextTerm = num1 + num2;
            num1 = num2;
            num2 = nextTerm;
        }
        return nextTerm;
    }
};

// Do not edit below this line
module.exports = fibonacci;
