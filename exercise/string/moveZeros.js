// var moveZeroes = function(nums) {
//     let count = 0;
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] !== 0) {
//             nums[count++] = nums[i];
//         }
//     }
//     while(count < nums.length) {
//         nums[count++] = 0;
//     }
//     console.log(nums)
// };


var moveZeroes = function(nums) {
    let currentNonZeroIndex = 0
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] != 0) {
            let n = nums[i]
            nums[i] = 0
            nums[currentNonZeroIndex++] = n
        }
    }
    return nums;
};

console.log(moveZeroes([0,0,1,1,3,0,2]))