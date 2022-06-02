const repeatString = function(string, num) {
    let stringReturn = '';
    let i = 0;
    if(num < 0){
        stringReturn = 'ERROR';
    }
    while(i < num){
        stringReturn += string;
        i++;
    }
    return stringReturn;
};

// Do not edit below this line
module.exports = repeatString;
