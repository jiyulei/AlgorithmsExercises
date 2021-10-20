// Write a function called isSubsequence which takes in two strings and checks whether the
// characters in the first string form a subsequence of the characters in the second string. In other
// words, the function should check whether the characters in the first string appear somewhere in
// the second string, without their order changing.

// O(m+n) 
function isSubsequence(str1,str2) {
    //         i
    // [a, c, d]   [k,a,b,c,d]
    //                      j

    // str1 always small than str2
    // check length
    if (str1.length > str2.length) {
        return false
    };

    let str1Length = str1.length; 

    // combine two string
    let newArr = (str1 + str2).split("");
    
    // i start from 0 , j starts from str1.length
    // loop through new array, 
    for (let i = 0,j = str1Length; j < newArr.length; j++) {
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