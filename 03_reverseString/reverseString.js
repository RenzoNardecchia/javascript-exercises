const reverseString = function(string) {
    let arrayFromString = string.split('');
    let reversedArray = arrayFromString.reverse();
    return reversedArray.join('');
};

// Do not edit below this line
module.exports = reverseString;
