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

// console.log(sameletter("ab", "s"));

//====================== Multiple Pointers Pattern===================
const arr = [-4, -3, -2, -1, 0, 1, 2, 3, 5];
function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    }
    if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}
// console.log(sumZero(arr));
// exersice
function countUniqueValues(arr) {
  let increser = 0;
  let i = 0;
  while (i <= arr.length) {
    let curreten = arr[i];
    let nextValue = arr[i + 1];
    if (curreten !== nextValue) {
      increser++;
    }
    i++;
  }
  return increser;
}

// console.log(countUniqueValues([]));
// ========================sliding window pattern======================
function findMax(arr, num) {
  let maxValue = 0;
  let tempValue = 0;
  //make for loop that calculate the first num from array
  for (let i = 0; i < num; i++) {
    maxValue += arr[i];
  }
  tempValue = maxValue;
  //make for loop for remove the first element and add the element that after last element in array we take in above for loop
  for (let i = num; i < arr.length; i++) {
    tempValue = tempValue - arr[i - num] + arr[i];
    maxValue = Math.max(tempValue, maxValue);
  }
  return maxValue;
}
// console.log(findMax([1, 3, 4, 5, 4, 4, 3, 3, 5, 6, 3], 3));

//============================= Divide And Conquer Pattern=================

// ========================================challenges================
function sumFreq(num1, num2) {
  freq1 = {};
  freq2 = {};
  const newNum1 = num1.toString();
  const newNum2 = num2.toString();
  if (newNum1.length !== newNum2.length) {
    return false;
  }
  for (let number of newNum1) {
    freq1[number] = (freq1[number] || 0) + 1;
  }
  for (let number of newNum2) {
    freq2[number] = (freq2[number] || 0) + 1;
  }
  for (let key in freq1) {
    if (freq1[key] !== freq2[key]) {
      return false;
    }
  }
  return true;
}
// console.log(sumFreq(22, 222));

// Frequency Counter / Multiple Pointers - areThereDuplicates

function areThereDuplicates() {
  const arr = [...arguments]; //this will take all the arguments and pass them in array
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    if (arr[left] === arr[right] && left !== right) {
      return true;
    }
    if (arr[left] < arr[right]) {
      right--;
    }
    if (arr[left] > arr[right] || left === right) {
      right = arr.length - 1;
      left++;
    }
  }
  return false;
}
console.log(areThereDuplicates(1, 2, 2, 3, 4, 5));
port = 3000;
app.listen(port, () => {
  console.log(`open in port : ${port} ^__-`);
});
