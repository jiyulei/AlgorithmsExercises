// for sorted array only
function binarySearch(arr, target) {
  if (arr.length === 0) {
    return -1;
  }

  if (arr.length === 1 && arr[0] !== target) {
    return -1;
  }
  //  m
  //    i
  // [1,2,3,4,5]  2    floor (2+3) /2 = 2.5  = 2
  //    j
  let i = 0;
  let j = arr.length - 1;

  while (i <= j) {
    let mid = Math.floor((i + j) / 2);
    if (arr[mid] < target) {
      i = mid + 1;
    } else if (arr[mid] > target) {
      j = mid - 1;
    } else {
      return mid;
    }
    console.log("i", i);
    console.log("j", i);
  }
  return -1;
}

// console.log(binarySearch([2],1));
// console.log(binarySearch([1,2,3,4,5],2));

// console.log(binarySearch([1,2,3,4,5],3));

// console.log(binarySearch([1,2,3,4,5],4));

console.log(binarySearch([1, 2], 2));
