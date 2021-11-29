// Write a function called isSubsequence which takes in two strings and checks whether the
// characters in the first string form a subsequence of the characters in the second string. In other
// words, the function should check whether the characters in the first string appear somewhere in
// the second string, without their order changing.

// O(m+n)
// iterative solution
function isSubsequence(str1, str2) {
  //         i
  // [a, c, d]   [k,a,b,c,d]
  //                      j

  // str1 always small than str2
  // check length
  if (str1.length > str2.length) {
    return false;
  }

  let str1Length = str1.length;

  // combine two string
  let newArr = (str1 + str2).split("");

  // i start from 0 , j starts from str1.length
  // loop through new array,
  for (let i = 0, j = str1Length; j < newArr.length; j++) {
    // if newArr[i] === newArr[j]   i++
    // if not equal j++, if j >= str.length return false
    // when i >= str1.length return true;
    // output boolean
    if (newArr[i] === newArr[j]) {
      i++;
    }
    if (i === str1Length) {
      return true;
    }
  }

  return false;
}

// recursive solution but not o(1) space
//  [a, c, d]   [k,a,b,c,e]
//  [a, c, d]   [a,b,c,e]
//  [c,d] [b,c,e]
//  [c,d] [c,e]
//  [d] []

function isSubsequence(str1, str2) {
  if (str1.length === 0) return true;
  if (str2.length === 0) return false;
  if (str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1));
  return isSubsequence(str1, str2.slice(1));
}

var twoSum = function (nums, target) {
  var a = [];
  //  t = 12
  //          i
  // [3,4,5,6,7,8]

  for (var i = 0, len = nums.length; i < len; i++) {
    var tmp = target - nums[i];
    console.log("------>","i", i);
    console.log('tmp:', tmp);
    if (a[tmp] !== undefined) return [a[tmp], i];
    a[nums[i]] = i;
    console.log('a:', a);


  }
};

console.log(twoSum([6,3,7,8,4,5], 12))
