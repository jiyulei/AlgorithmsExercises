// Write a function accepts two arrays. The function should return true
// if every value in the array has it's corresponding value
// squared in the second array.
// The frequency of values must be the same.

// 1. two for loop, takes O(n^2);
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2);

    if (correctIndex === -1) {
      return false;
    } else {
      arr2.splice(correctIndex, 1);
    }
  }

  return true;
}

// 2. Use Object to count frequency. takes O(n)
function same2(arr1,arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    let frequencyObject1 = {};
    let frequencyObject2 = {};

    // put arr1 and arr2 into those two object, value is frequency
    for( let val of arr1) {
        frequencyObject1[val] = frequencyObject1[val] + 1 || 1;
    }

    for( let val of arr2) {
        frequencyObject2[val] = frequencyObject2[val] + 1 || 1;
    }

    // loop object1 

    for ( let key in frequencyObject1) {
        // return false if key**2 is not in Object2
        if ( !(key**2 in frequencyObject2) ) {
            return false;
        }
        // return false if the frequency is not equal
        if ( frequencyObject2[key**2] !== frequencyObject1[key]) {
            return false;
        }
    }

    return true;
}

// console.log(same2([1,2,3,3,4], [16,1,9,4,9]));



// anagram 
function anagram(str1, str2) {
    // check two string length
    if (str1.length !== str2.length) {
        return false;
    }

    // store str1 and str2 into two object
    let obj1 = {};
    let obj2 = {};

    for ( let char of str1) {
        obj1[char] = obj1[char] + 1 || 1;
    }

    for ( let char of str2) {
        obj2[char] = (obj2[char] || 0) + 1;
    }

    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
        return false;
    }
    // loop obj1 check if it has the same key value pair with object2
    for (let key in obj1) {
       if (obj1[key] !== obj2[key]) {
           return false;
       }
    }

    return true;

}

console.log(anagram('apple', 'eppla'));

