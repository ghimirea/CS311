"use strict";

function checkForSum(numList, numZ){
    const myMap = new Map();
    for(const num of numList ){
        myMap.set(numZ - num, num);
    }
    let result = [];
    for(let i = 0; i < numList.length; i++){
        let current = numList[i];
        if(myMap.has(current)){
            result = result.concat([current, myMap.get(current)])
            return result;
        }
    }
    return -1;
}

console.log(checkForSum([3, 5, 8, 4], 15));
  