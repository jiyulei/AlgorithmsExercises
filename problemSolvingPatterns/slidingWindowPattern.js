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


const lengthOfLongestSubstring = s => {
    // keeps track of the most recent index of each letter.
    const map = {};
    // keeps track of the starting index of the current substring.
    var left = 0;
    
    return s.split('').reduce((max, v, i) => {
        // starting index of substring is 1 + (the last index of this letter) to ensure this letter is not counted twice.
        left = map[v] >= left ? map[v] + 1 : left;
        // updates last recorded index of letter to the most recent index.
        map[v] = i;
        
        // indices of current substring is (idx - leftIdx, idx).
        // +1 because if your substring starts and ends at index 0, it still has a length of 1.
        return Math.max(max, i - left + 1);
    }, 0)
};
//       _
// "abacbb"    
//        _   
// iterate      max     v     i      map           left   returnValue
// firstLoop     0     "a"    0      {a:0}           0        1
//secondLoop     1     "b"    1    {a:0,b:1}         0        2
// thirdLoop     2     "a"    2    {a:2,b:1}         1        2
// forthLoop     2     "c"    3    {a:2,b:1,c:3}     1        3
// fifthLoop     3     "b"    4    {a:2,b:4,c:3}     2        3
// sixthLoop     3     "b"    5    {a:2,b:5,c:3}     5        3


//      _
// "abcaead"    
//        _   
// iterate      max     v     i      map                   left    returnValue
// firstLoop     0     "a"    0      {a:0}                   0         1
//secondLoop     1     "b"    1      {a:0,b:1}               0         2
// thirdLoop     2     "c"    2     {a:0,b:1,c:2}            0         3
// forthLoop     3     "a"    3     {a:3,b:1,c:2}            1         3
// fifthLoop     3     "e"    4   {a:3,b:1,c:2,e:4}          1         4
// sixthLoop     4     "a"    5   {a:5,b:1,c:2,e:4}          4         4
// 7thLoop       4     "d"    6   {a:5,b:1,c:2,e:4,d:6}      4         4