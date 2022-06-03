const removeFromArray = function(array, ...args) {
    const newArray = array;
    for(let i = 0; i < args.length; i++){

        for(let j = 0; j < newArray.length; j++){
            if(newArray[j] === args[i]){
                newArray.splice(j, 1);
            } else continue;
        }

                    
    }

    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
