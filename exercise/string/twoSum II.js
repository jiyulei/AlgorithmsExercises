var twoSum = function(numbers, target) {
    let j = numbers.length - 1;
    let i = 0;
    let result = [];
    while (i < j) {
        if (numbers[i] + numbers[j] === target) {
            return result = [i,j];
        } else if(numbers[i] + numbers[j] > target) {
            j--;
        } else {
            i++;
        }
    }
    
    return result;
};

console.log(twoSum([2,7,11,15],9))