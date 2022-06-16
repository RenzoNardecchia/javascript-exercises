const findTheOldest = function(array) {
    let oldestGuy;
    let oldestAge = 0;
    for(let i = 0; i < array.length; i++){

        if(array[i].yearOfDeath===undefined){array[i].yearOfDeath = 2022};

        const guy = array[i].yearOfDeath - array[i].yearOfBirth;

        if(oldestAge > guy){
            continue;
        }
        oldestAge = guy;
        oldestGuy = array[i].name;
    }
    for(let j = 0; j < array.length; j++){
        if(array[j].name != oldestGuy){
            array.splice([j], 1)
        }
    }
    // return array[0].name;
    
    return oldestGuy;

};

// Do not edit below this line
module.exports = findTheOldest;
