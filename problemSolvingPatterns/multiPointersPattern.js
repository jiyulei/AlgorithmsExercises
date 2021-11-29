// sum zero.
// In an ordered Array, find the first pair of number which sum is zero.
// eg :[ -3,-2,1,0,1,3]  returns[-3,3]
function sumZero(arr) {
    let left = 0;

    let right = arr.length - 1;
   
    while (left < right) {
        if (arr[left] + arr[right] > 0) {
            right--;
        } else if (arr[left] + arr[right] < 0) {
            left++;
        } else {
            return [arr[left],arr[right]];
        }
    }
    return [];
}

// console.log(sumZero([-3,-2,-1,0,1,10]));

// CountUnique number of an array eg: [1,2,2,2,3,4,5,5,5,6] retuns 6 
                       
function countUnique(arr) {
    // input arr
    if (arr.length === 0) {
        return 0;
    }
    if (arr.length === 1) {
        return arr[0];
    }
    //  i
    // [1,2,3,2,3] 
    //    j
    // two pointers , i from first j from second , count = 1
    let count = 1;
    
     // loop arr, while j === arr.length -1 stop
    for ( let i = 0, j = 1; j < arr.length ; j++) {
        // compare arr[i] with arr[j], if not equal count++ , i to j, j++
        if (arr[i] !== arr[j]) {
            count++;
            i = j;
        } 
    }

    return count;
}  

// this moves unique number to the beginning of array eg: [1,1,1,2,3,4,5,5,5]   returns [1,2,3,4,5,4,5,5,5]
function countUnique2(arr) {
    // input arr
    let result = 1;
    if (arr.length === 0) {
        return 0;
    }

    if (arr.length === 1) {
        return result;
    }
    //    i
    // [1,1,2,3,4,3,4,4,5] 
    //        j

    for (let i = 0, j = 1; j < arr.length ; j++) {
        // if arr[i] !equal to arr[j], then put arr[j] value in arr[i+1],also move the i to next
        if (arr[i] !== arr[j]) {
            arr[++i] = arr[j];
        } 
        result = i;
    }

    return result + 1;
}  

console.log(countUnique2([1,2,2,2,3,4,5,5,6,6,6]))