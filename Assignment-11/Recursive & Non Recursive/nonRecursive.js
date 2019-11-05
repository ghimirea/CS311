//Write a non-recursive version of the following function which returns the min element in an array:

function min1(array) {
    if (array.length > 1) {
        let other = min1(array.splice(1));
        if (other < array[0]) {
            return other;
        }
    }
    return array[0];
}


function min2(array) {
    let min = array[0];
    for (let index = 1; index < array.length; index++) {
        if(array[index] < min){
            min = array[index];
        } 
    }
    return min;
}

let myArr = [8,5, 2, 10];
console.log(min2(myArr))
console.log("****************Non-Recursive****************");
console.log(min1(myArr));