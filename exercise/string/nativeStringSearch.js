function searchNativeString(str, target) {
  //         i
  // [helloomga]

  //          j
  //      [omg]
  let arr = str.split("");
  let targetArray = target.split("");
  console.log("arr", arr, "target", targetArray);
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === targetArray[0]) {
      for (let j = 0; j < targetArray.length; j++) {
        if (arr[i + j] !== targetArray[j]) {
          break;
        }
        if (j === targetArray.length - 1) {
          count++;
        }
      }
    }
  }

  return count;
}

console.log(searchNativeString("hello omg ok omg", "ll"));
