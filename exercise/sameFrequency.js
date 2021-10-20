// Write a function called sameFrequency Given two positive integers,
// find out if the two numbers have the same frequency of digits.
// Must be O(n), eg: same(123,321) return true

function sameFrequency(num1, num2) {
    let str1 = num1.toString();
    let str2 = num2.toString();

    if (str1.length !== str2.length) {
        return false;
    }
    // store str1 str1 to two objects
    let obj1 = {};
    let obj2 = {};

    for (let char of str1) {
        obj1[char] = obj1[char] + 1 || 1;
    }

    for (let char of str2) {
        obj2[char] = obj2[char] + 1 || 1;
    }

    // loop object 1 check if the key and value are equal with obj2
    for (let key in obj1) {
        if (obj2[key] !== obj1[key]) {
            return false;
        }
    }

    return true;

}

// console.log( sameFrequency(1234,3312));

// O(nlogN);
function dup(...arr) {
    if(arr.length === 0 || arr.length === 1) {
        return false;
    }
    arr.sort();
    let i = 0;
    //    i    
    // [1,2,2]
    //      j

    for ( let j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
            return true;
        }
        i = j;
    }   
    return false;
}
                 
console.log( dup("a","b","c","a"));
console.log( dup(1,2,3,3,5));