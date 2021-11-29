function permutationString(str1, str2) {
  const shortArr = str1.split("");
  const longArr = str2.split("");

  // ab
  // adeba
  //  --
  let shortArrMap = {};
  let left = 0;

  for (let val of shortArr) {
    shortArrMap[val] = shortArrMap[val] ? shortArrMap[val] + 1 : 1;
  }

  while (left <= longArr.length - shortArr.length) {
    let longArrMap = {};

    for (let j = left; j < left + shortArr.length; j++) {
      longArrMap[longArr[j]] = longArrMap[longArr[j]]
        ? longArrMap[longArr[j]] + 1
        : 1;
    }

    if (matchTwoMaps(shortArrMap, longArrMap)) {
      return true;
    }

    left++;
  }

  return false;
}

function matchTwoMaps(map1, map2) {
  for (let val in map1) {
    if (map2[val] !== map1[val]) {
      return false;
    }
  }
  return true;
}

const str1 = "acb";
const str2 = "acsbebeqwereacb";

// console.log(permutationString(str1, str2));


function permutationString2(s1,s2) {
  const arr1 = s1.split("");
  const arr2 = s2.split("");

  // ab
  //  ab_
  // abc
  //      __
  // eidebeoaoo
  // {e:1,i:0,d:0;b:0;o:1}

  const map1 = {};
  const map2 = {};


  for (let el of arr1) {
    map1[el] = map1[el] ? map1[el] + 1 : 1;
  }
 
  for (let i = 0; i < arr1.length; i++) {
    map2[arr2[i]] = map2[arr2[i]] ? map2[arr2[i]] + 1 : 1;
  }

  if (arr2.length < arr1.length) {
    return false;
  }

  // if (arr2.length === arr1.length) {
  //   return mapMatch(map1,map2);
  // }
  let left = 0; 
  let right = left + arr1.length;

  while(right <= arr2.length) {

    console.log(map2)
    if (mapMatch(map1,map2)) {
      return true;
    } else {
      map2[arr2[left]]--;
      map2[arr2[right]] = map2[arr2[right]] ? map2[arr2[right]] + 1 : 1;
      right++;
      left++;
    }
  }
  

  // console.log(map1,map2);
  return false;


  function mapMatch(map1,map2) {
    for (let val in map1) {
      if (map1[val] !== map2[val]) {
        return false;
      }
    }
    return true;
  }

}



// console.log(permutationString2("abc","ccccba"))

console.log(permutationString2("abc","cba"))



  