// the slides if you want
// https://cs.slides.com/colt_steele/big-o-notation#/20/0/4
const express = require("express");
const app = express();

//big o =>it's system It's a way of generalizing code and talking about it and comparing code and its performance to other pieces of code.

// ====================================== time complexity ====================================
function sumAllNumber(n) {
  return (n * (n + 1)) / 2;
}
console.log(sumAllNumber(10000000000000000));
//here just 3 operations and we call it O(1) that mean it doesn't change

function sumAllNumber2(n) {
  let total = 0;
  for (let i = 0; i <= n; i++) {
    total += i;
  }
  return total;
}
// here if we suposed that n = number of operation in one for loop we have 7 operation that mean 5n+2 from operaion like if n = 1000000 that mean all the operation number = 5000002 operatioin
// and we call it O(n) that mean the runtime increase with the input

// that get us to big O
// big o =>It's a way of describing the relationship between the input to a function or as it grows
// when we talk about big o we talk about the wors case we talk about upper bound for runtime
console.log(sumAllNumber2(1000000));

// Another Example
// what is the big O for this code
function countUpAndDown(n) {
  console.log("Going Up!!!");
  for (let i = 0; i <= n; i++) {
    console.log(i);
  } //here O(n)
  console.log("Going Down!!!");
  for (let i = n; i >= 0; i--) {
    console.log(i);
  } //here O(n)
  console.log("Back Down . Bay!!");
}
countUpAndDown(10);

// we will figure Big O for this function //it is two o(n)

function printAllPairs(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
} //this big O square O(n^2) and if you open https://rithmschool.github.io/function-timer-demo/ and press on printAllPairs you will find the graph like x^2  quadratic
// n increases, the runtime increases roughly at the rate of n squared.

// ================================Simplifying Big O Expressions==============================
// When determining the time complexity of an algorithm, there are some helpful rule of thumbs for big O expressions.
// These rules of thumb are consequences of the definition of big O notation.

// the rules
//  1 ==========Constants Don't Matter
// O(2n)  =will be=> O(n) //we ignore the 2
// O(500) =will be=>O(1) // because it's constant//this is the faster
// O(13n^2) =will be=> O(n^2) //this is the slowest

// 2 ===========Smaller Terms Don't Matter
// O(n + 10) =will be =>  O(n)
// O(1000n+50) =will be => O(n)
// O(n^2+ 5n + 8 ) =will be => O(n^2)
// it's meaningless imagen we have 1000 O(n^2+ 5n + 8 ) it will be 1005008 it's meaning less for O(n^2) that is 1000000

// Big O Shorthands
// -Analyzing complexity with big O can get complicated
// -There are several rules of thumb that can help
// -These rules won't ALWAYS work, but are a helpful starting point

// Big O Shorthands
// 1) Arithmetic operations are constant //this mean all operation take same time like // 1+1 take same time of 10000000+23
// 2) Variable assignment is constant //this mean the x=10 same time x=10000000000000
// 3) Accessing elements in an array (by index) or object (by key) is constant //this mean if you want access to element like array[0] same time for access array[34] or access by key
// 4)In a loop, the the complexity is the length of the loop times the complexity of whatever happens inside of the loop //this mean the  look take O(n) and what is inside the loop are count on time like if the loop have nested loop the big O will be O(n^2)

//

// ======================================= now space complexity =======================
// We can also use big O notation to analyze space complexity: how much additional memory do we need to allocate in order to run the code in our algorithm?
// What about the inputs?
// Sometimes you'll hear the term auxiliary space complexity (search on it) to refer to space required by the algorithm, not including space taken up by the inputs.
// Unless otherwise noted, when we talk about space complexity, technically we'll be talking about auxiliary space complexity.//this mean we are foucs on what is happen in algorithms

// Space Complexity in JS
// Rules of Thumb
// . Most primitives (booleans, numbers, undefined, null) are constant space //all of this take the same space
// Strings require O(n) space (where n is the string length)
// Reference types are generally O( n), where n is the length (for arrays) or the number of keys (for objects)

function sum(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i]; //it's don't have impact on space becauase don't make new space
  }
  return total;
} //this mean we have the same space => O(1)

// Another Examble
function double(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(2 * arr[i]); //new array get longer and longer and longer
  }
  return newArr;
} //we get biger array with biger n =becuase of that it will be => O(n)
port = 3000;
app.listen(port, () => {
  console.log(`open in port : ${port} ^__-`);
});
