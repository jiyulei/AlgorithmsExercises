// Given a sorted array, and a targe value, 
// find the pair of value which has the average equals to target value.
// Might be more than one pair
// Should be O(n)

function averagePair(arr, target) {
    if (arr.length <= 1) {
        return null;
    }
    //  i
    // [0,1,2,3,4,5]  2.5  --> [1,4] [2,3]
    //            j
    // mid = 2.5 
    let left = 0;
    let right = arr.length - 1 ;
    let result = [];
    while (left < right) {
        let midValue = (arr[left] + arr[right]) /2;
        if (midValue > target) {
            right--;
        } else if (midValue < target) {
            left++;
        } else {
            result = [...result,[arr[left],arr[right]]];
            left++;
            right--;
        }
    }
    return result.length > 0 ;
}

console.log(averagePair([0,1,2,3,4,5],3));