const palindromes = function (str) {
    let lowerCased = str.toLowerCase();
    let stringArray = lowerCased.split('');
    let filteredString = '';
    for(let i = 0; i < stringArray.length; i++){
        let currentCharcter = stringArray[i].charCodeAt(0);
        if(currentCharcter < 65 || currentCharcter > 122 || (currentCharcter > 90 && currentCharcter < 97)){
            continue;
        }
        filteredString += stringArray[i];
    }
    let filteredStringArray = filteredString.split('');
    let reversedString = (filteredStringArray.reverse()).join('');
    // console.log(reversedString);
    if(filteredString === reversedString){
        return true;
    }
    return false;
};

// Do not edit below this line
module.exports = palindromes;
