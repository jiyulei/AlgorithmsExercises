// linear probing
// separate chaining

// store key value pair, fast on check and delete insert

// hash function --> convert keys into vaild array indices
// good hash function:
//  1.fast
//  2.doesn't cluster outputs at specific indcies
//  3.same input get same output

class HashMap {
  constructor(size) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    const PRIME = 43;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let charValue = key.charCodeAt(i) - 96;
      hash = (hash * PRIME + charValue ) % this.keyMap.length;
    }
    return hash;
  }

  set(key, value) {
    const index = this._hash(key);

    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }

    this.keyMap[index].push([key, value]);
  }

  get(key) {
    const index = this._hash(key);
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i];
        }
      }
    }
    return undefined;
  }

  keys() {
    let keys = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let val of this.keyMap[i]) {
          if (!keys.includes(val[0])) {
            keys.push(val[0]);
          }
        }
      }
    }
    return keys;
  }

  values() {
    let values = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let val of this.keyMap[i]) {
          if (!values.includes(val[1])) {
            values.push(val[1]);
          }
        }
      }
    }
    return values;
  }
}

const mapArray = new HashMap(19);

mapArray.set("dog", "123");
mapArray.set("dfog", "22");
mapArray.set("cow", "22");
mapArray.set("green", "44");
mapArray.set("gray", "55");
mapArray.set("color", "66");
mapArray.set("coloradsf", "66");
mapArray.set("colordad", "66");
mapArray.set("colorqewr", "66");
mapArray.set("colodaasdrqewr", "66");
mapArray.set("ceeweqolorqewr", "66");
mapArray.set("colccorqewr", "66");

// console.log(mapArray._hash('cow'));

console.log(mapArray.keyMap);
