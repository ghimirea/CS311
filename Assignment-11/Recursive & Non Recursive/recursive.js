//Write a recursive version of the following function that sum all the elements in an array:

function sum1(array) {
    let sum = 0;
    for (const num of array) {
    sum += num;
    }
    return sum;
    }

    function sum(array){
        if(array.length === 0)return;
        if(array.length == 1)return array[0];
        else{
            let sumOfArr = 0
            for(let i = 0; i < array.length; i++){
                sumOfArr += array.pop() + sum(array);
            }
            return sumOfArr;
        }
    }

    let myArr = [1,2,3,4];
    console.log(sum1(myArr));
    console.log("************Non-Recursive***************")
    console.log(sum(myArr));

