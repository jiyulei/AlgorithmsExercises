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

 console.log(countChar("thiS is A number 1134"));