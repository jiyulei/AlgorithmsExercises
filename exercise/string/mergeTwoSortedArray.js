
//   i
// [0,3,6]       [0,1,2]
//  j
// [1,2,4,8,9]
function mergeTwoSortedArray (arr1, arr2) {
    const mergedArray = [];
    let result = [];
   
    if (arr1.length <= arr2.length) {
      result = merge(arr1,arr2);
    } else {
      result = merge(arr2,arr1);
    }
    //        i
    // [1,3,5]     [1,2,3,4,5,]
    //      j
    // [2,4,6,7]
    function merge(array1,array2) {
        console.log(array1, array2)
      let i = 0;
      let j = 0;
      
      while (i < array1.length) {
        if (array1[i] < array2[j]) {
          mergedArray.push(array1[i]);
          i++;
        } else {
          mergedArray.push(array2[j]);
          j++;
        }
      }
      return mergedArray.concat(array2.slice(j)); 
    }
  
    return result;
  }
  
  console.log(mergeTwoSortedArray([1,3,5], [2,4]));
  