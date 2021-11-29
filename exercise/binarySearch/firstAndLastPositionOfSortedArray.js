//        [1,2,3,3,3,3,5,5]
//return       |

function findMostLeft(arr, target, left, right) {

    while(left <= right) {
        let mid = left + right >> 1;
        if (arr[mid] >= target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    // while(left <= right) {

    //     let mid = left + right >> 1;
    //     if (arr[mid] < target) {
    //         left = mid + 1;
    //     } else {
    //         right = mid - 1;
    //     }

    // }

    return left;
}


var searchRange = function(nums, target) {
    const left = findMostLeft(nums, target, 0, nums.length - 1);

    if (nums[left] !== target) {
        return [-1,-1];
    }

    const right = findMostLeft(nums, target + 1, left, nums.length - 1);
    return [left, right - 1];
};

// console.log(searchRange([8,8],8));


function binarySearchFirst(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = left + right >> 1;
        if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return left;
}

console.log(binarySearchFirst([1,2,2,2,3],2));
