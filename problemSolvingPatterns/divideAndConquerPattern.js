// Binary Search
// [1,2,3,4,5......,1024] 2^10
//  *****
// [1,2,3,4,5,6,7,8]     2 ^3    
// [1,2,3,4] 4     2 ^2
// [3 4]            2 ^1
// [4]            2 ^0
// O(logN)

function binarySearch(arr, target) {
    if (arr.length === 0) return null;

    let leftIndex = 0;
    let rightIndex = arr.length - 1;

    while (leftIndex <= rightIndex) {
       
        let midIndex = Math.floor((leftIndex + rightIndex) / 2);
        let midVal = arr[midIndex];

        if (midVal < target ) {
            leftIndex = midIndex + 1;
        } else if (midVal > target) {
            rightIndex = midIndex - 1 ;
        } else {
            return arr[midIndex];
        }
    }
    return -1;
}

console.log(binarySearch([1,2,3,4,5], 5))
console.log(binarySearch([1,2,3,4,5,6], 1))
