// given a str , count each char times
// input --> str  output { a: 1, b: 0 }
// eg1: "hello" "thiS is A number 1134"
// only care about Alpha and Number and we dont care about case


 function countChar(str) {
     // result object going to return 
     let result = {};
    //  loop each char in the string
    
    for (const char of str.toLowerCase()) {
        //  result[char] = result[char] ? ++result[char] : 1;
        result[char] = ( result[char] || 0 ) + 1;
    
    }

    return result;

 }

//  console.log(countChar("thiS is A number 1134"));


// { length : 1, data: { 0: 'a'}}
// [0,1]
 



var removeElement = function(nums, val) {
    if(nums.length === 0 || nums === null) return 0;
    
    let i=0;
    //            i
    // [2,3,3,3,3,1,1,1,1]  1
    //                    j
    for(let j=0; j<nums.length; j++){
     if(nums[j] !== val){
      let tmp = nums[j];
      nums[j] = nums[i];
      nums[i] = tmp;
      i++;
     }
    }
    
    return nums;
};
                           
console.log(removeElement([1,1,1,2,3,3,3,1,3],1));