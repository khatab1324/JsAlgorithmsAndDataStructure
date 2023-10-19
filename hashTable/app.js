const express = require("express");
const app = express();
// first of all lets explain what is hash => hash take value and another input like arraylengeth and give you value this value you can use it
// example you want to add pink value after hash it and where is it in the array , i mean array exapt index like arr[0] ,arr[1] ... and so on but I want to get value from key like this arr[pink] and give it so fast
// to do this you need hash like this hash("pink",arrLength);and this will alwayse one key(number) you can get the value from it
// to make function hash good
// 1-fast
//2- doesn't cluster outputs at specific indices, but distributes uniformly
//3-Deterministic (same input give you the same output)

// function hash(key, arrayLen) {
//   let total = 0;
//   for (let char of key) {
//     // map "a" to 1, "b" to 2, "c" to 3, etc.
//     let value = char.charCodeAt(0) - 96;
//     total = (total + value) % arrayLen;
//   }
//   return total;
// }
// console.log(hash('khattabaaaaaaaaaaaaa',11));
// look , the total the given just in array length
//      Problem with our current hash
// 1-Only hashes strings (we won't worry about this)
// 2-Not constant time -linear in key length
// 3- Could be a little more random

// improve to our code
// function hash(key, arrayLen) {
//   let total = 0;
//   let WEIRD_PRIME = 31; //not colt and even I know what is this //and prime number it is complicated and need a ton of math
//   for (let i = 0; i < Math.min(key.length, 100); i++) {
//     // this will loop the maximum 100 if we have arr have length 10000000 ,it will loop just 100
//     let char = key[i];
//     let value = char.charCodeAt(0) - 96;
//     total = (total * WEIRD_PRIME + value) % arrayLen;
//   }
//   return total;
// }
// console.log(hash("salmon", 10));

// ok what about if you hash two value and give you the same result like salmon and darkblue
// we have two way separate chainging and the second way is linear probing
// 1-the separte chainging that is save the value in same index in nested array like thsi  [a,[b,b],c] look to b array ,it have two value
// 2- the linear probing , this will look to the index beside the key and if it emdty ,we will save the value in it
// like , if you have more then value have the same key ,they will be beside each other like this [b,b,b]
// we will take just separte chainging
class HashTable {
  constructor(size = 53) {
    //the size doesn't matter change it, it will be the same thing //maybe when you change it the some index will enter in onother index just change the size again
    this.keyMap = new Array(size);
  }
  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31; //not colt and even I know what is this //and prime number it is complicated and need a ton of math
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      // this will loop the maximum 100 if we have arr have length 10000000 ,it will loop just 100
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }
  set(key, value) {
    let index = this._hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
  }
  get(key) {
    // not complete becuase you will have deffernt key in same index you need to loop throw them and check of the key and return it if you find it
    //and I am lazy
    let index = this._hash(key);
    let keyValue = this.keyMap[index];
    if (!keyValue) return undefined;
    console.log(keyValue); //this will give you the entaire array you can map it or make for loop
    // also maby you will have deffernt key in same index you need to loop throw them and check of the key and return it if you find it
    return keyValue;
  }
  values() {
    let valueArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!valueArr.includes(this.keyMap[i][j][0])) {//if the value not include
            valueArr.push(this.keyMap[i][j][1]);
          }
        }
      }
    }
    console.log(valueArr);
    return valueArr;
  }
  keys() {
    let keysArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          // here to check is this key exist in our array
          if (!keysArr.includes(this.keyMap[i][j][0])) {//if the value not include
            keysArr.push(this.keyMap[i][j][0]);
          }
        }
      }
    }
    console.log(keysArr);
    return keysArr;
  }
}
let hashTable = new HashTable();
hashTable.set("aatrox", "i am not god");
hashTable.set("aatrox", "do you want fight me");
// look aatrox qoute,they are togother
hashTable.set("khattab", "i need understand this");
hashTable.set("khattab", "i need understand this");
hashTable.set("khattab", "i need understand this");

// hashTable.get("aatrox");
hashTable.values();
hashTable.keys();
console.log(hashTable);
const port = 3500;
app.listen(port, () => {
  console.log("we open in the port " + port);
});
