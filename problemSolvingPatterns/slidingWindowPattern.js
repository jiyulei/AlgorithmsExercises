// this takes O(n^2) in worst case
function maxSubarraySum (arr, n) {
    // arr check length 0 , 1
    if (arr.length === 0) {
        return null;
    }

    if (arr.length === 1) {
        return arr[0];
    }
    let sum = sumSubArray(arr, 0, n);

    for(let i = 0; i <= arr.length - n ; i++) { 
        if( sumSubArray(arr, i , n) > sum ) {
            sum = sumSubArray(arr, i, n);
        }
       
    } 
    return sum;
}
function sumSubArray(arr, start, n) {
    let sum = 0;
    for (let i = start, j = start + n; i < j; i++) {
        sum += arr[i]; 
    }
    return sum;
}
                           
console.log(maxSubarraySum([1,2,3,2,4,5,7,1,2,3,8,5,4],3))

// this is the sliding window pattern, Only takes O(n)
//        i
// [1,2,3,4,5,6,6,7] n = 3
//  _   _ 

function maxSubarraySum2(arr,n) {
    if (arr.length === 0 || arr.length < n) return null;
    let tempSum = 0;
    let maxSum = 0;

    for (let i = 0; i < n; i++ ) {
        tempSum += arr[i];
    }
    maxSum = tempSum;

    for (let i = n; i < arr.length; i++) {
        tempSum = tempSum - arr[i-n] + arr[i];
        maxSum = Math.max(tempSum, maxSum);
    }

    return maxSum;
}
console.log(maxSubarraySum2([1,2,3,2,4,5,7,1,2,3,8,5,4],3))
