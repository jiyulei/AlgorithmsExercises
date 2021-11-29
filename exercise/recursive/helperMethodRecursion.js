// basic pattern
function outer (input) {
    var outerScopedVariable = [];

    function helper(helperInput) {
        // modify the outerScopedVariable
        helper(helperInput--);
    }

    helper(input);

    return outerScopedVariable;
}

function collectOdd(arr) {
    let result = [];
    function helper(arr) {
        if (arr.length === 0) {
            return;
        }
        if (arr[0] % 2 !== 0) {
            result.push(arr[0]);
        }
        helper(arr.slice(1));
    }

    helper(arr);

    return result;
}

console.log(collectOdd([1,2,3,4,5,6]));

function productOfArray (arr) {
    if (arr.length === 0) {
        return 1;
    }
    let result = arr[0];
    return result * productOfArray(arr.slice(0));
    
}

console.log(productOfArray([1,2,3]));
