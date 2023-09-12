const express = require("express");
const app = express();

// what is the algorithms : is process or sets of steps to accomplish a certain task
// https://cs.slides.com/colt_steele/problem-solving-patterns //very important file that tell you what to do // what is the step of solving problem etc...

function same(arr1, arr2) {
  let freq1 = {};
  let freq2 = {};
  for (let value of arr1) {
    freq1[value] = (freq1[value] || 0) + 1;
  }
  for (let value of arr2) {
    freq2[value] = (freq2[value] || 0) + 1;
  }
  for (let key in freq1) {
    if (!(key ** 2 in freq2)) {
      return false;
    }
    //this tell if the number of keys in freq1 one should be the same number of freq2 or returen false
    if (freq1[key ** 2] !== freq2[key]) {
      return false;
    }
  }
  console.log(freq1);
  console.log(freq2);
  return true;
}

const array1 = [1, 2, 2, 3];
const array2 = [1, 4, 4, 9];
// console.log(same(array1, array2));

// same letter
function sameletter(word1, word2) {
  const newWord1 = [...word1];
  const newWord2 = [...word2];
  let freq1 = {};
  let freq2 = {};
  for (let value of newWord1) {
    freq1[value] = (freq1[value] || 0) + 1;
  }
  for (let value of newWord2) {
    freq2[value] = (freq2[value] || 0) + 1;
  }
  for (let key in freq1) {
    if (!(key in freq2)) {
      return false;
    }
    //this tell if the number of keys in freq1 one should be the same number of freq2 or returen false
    if (freq1[key] !== freq2[key]) {
      return false;
    }
  }
  console.log(freq1);
  console.log(freq2);
  return true;
}
console.log(sameletter("ab", "s"));
port = 3000;
app.listen(port, () => {
  console.log(`open in port : ${port} ^__-`);
});
