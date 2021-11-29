// "abcdea"  --> abcde
//         i
// abcadecdef
//  j

//  0 < i < arr.length - 1
//  i + 1 < j < arr.length
// check unique substring

function getLongestSubString(str) {
    const arr = str.split("");
    let resultCount = 0;

    if (arr.length === 0) {
        return 0;
    }

    if (arr.length === 1) {
        return 1;
    }

    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            const count = countLongest(arr.slice(i,j+1));
            if (count > resultCount) {
                resultCount = count;
            }
        }
    }

    return resultCount;
    
}

//                    0   1
// pass ==> arr.slice(i,j+1)
// map
function countLongest(arr) {
    let map = {};
    let count = 0;

    for (let val of arr) {
        if (!map[val]) {
            map[val] = 1;
            count++;
        } else {
            return count;
        }
    }

    return count;
}

// console.log(getLongestSubString("abcaaaaddefgh"))



var lengthOfLongestSubstring = function(s) {

    // to array
    const arr = s.split("");
    let map = {};
    let left = 0;
    //      _
    // abdcaefgahijka
    //            i
    //  left = 0, map = {} ; i = 0;
    // loop1: left = 0; map= {a:0}
    // loop2: left = 0; map = {a:0, b:1}
    // loop3: left = 1

    const result = arr.reduce((prev, cur, i) => {
        left = left <= map[cur] ? map[cur] + 1 : left;
        map[cur] = i;

        return Math.max(i - left + 1, prev);

    }, 0);

    return result;
   
};


console.log(lengthOfLongestSubstring("abcaaaaddefgh"))
