// brutal force
function reverseString(string) {
    const arr = string.split("");
    let result = [];
    // [0,1,2,3,4,5,6]  length = 4
       
    //  i           j  length = 7    i  =length -1 -j


    for (let i = 0; i < arr.length; i++) {
        result[i] = arr[arr.length - 1 - i];
    }
    return result.join("");
}

// recursion

function reverseRecursive(string) {
    let result = '';
    // ab
    if (string.length === 1) {
        return string.charAt(0);
    }

    result = reverseRecursive(string.substr(1)) + string.charAt(0);
    return result; 
}

console.log(reverseRecursive('ab c d e'));


// two pointer
function reverseString2(string) {
    const arr = string.split("");
    //  i 
    // [a,b,c,d,e]  length = 5
   //           j   
   // i + j + 1 = length 
   
    for (let i = 0; i < arr.length / 2; i++ ) {
        j = arr.length - i - 1;
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    return arr.join("");  
}

console.log(reverseString2('12345'));

//
function reverseString3 (s) {
    let result = '';
    for (let char of s) {
        result = char + result;
    }
    return result;
}

