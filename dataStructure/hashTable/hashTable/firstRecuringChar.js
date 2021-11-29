// [3,1,2,2,4,3]  return 2
// [3,1,1,2,2,4,3]  return 1
function firstRecurNum (arr) {
    let result = null;
    let data = [];

    if (arr.length <= 0) {
        return undefined;
    }
    // loop the given array, store each value into the data array by it's value
    //  data[arr[i]] === 1  ? return arr[i] : data[arr[i]] = 1

    //        i
    // [3,1,2,2,4,3]   [ , 1, 1 , 1 ,]
    for (let i = 0; i < arr.length; i++) {
        if (!data[arr[i]]) {
            data[arr[i]] = 1;
        } else {
            result = arr[i];
            break;
        }
    }
    // output the number
    return result;
}

console.log(firstRecurNum([2,5,1,2,3,5,1,2,4]));
console.log(firstRecurNum([2,1,7,1,2,3,5,1,2,4]));
console.log(firstRecurNum([3,1,2,2,4,3]));
console.log(firstRecurNum([3,1,1,2,2,4,3]));
console.log(firstRecurNum([1,2,3]));