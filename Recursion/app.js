const express = require("express");
const app = express();
// recursion is the function call it self and make change to not cuntinue for ever
function countDown(num) {
  console.log(num);
  if (num <= 0) return;
  countDown(num - 1);
}
// countDown(10);

//

// make factorial
function factorial(num) {
  if (num === 0) return 1;
  console.log(num);
  return num * factorial(num - 1);
}
// console.log(factorial(4));

// helper function => helper function is inside main function , and helper function will recursion ,this main (programmer call it outer) function there inside it recursive function (programmer call it helper)
function collectOddValuesWithHelperFunction(arr) {
  let result = [];

  function helper(helperInput) {
    if (helperInput.length === 0) {
      return;
    }

    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }

    helper(helperInput.slice(1));
  }

  helper(arr);

  return result;
}
// we use helper function to fill array or object

// what about if you don't want to use helper recursion ?yes you can use pureRecursion but
// it more chalnging
function collectOddValuesWithPureRecusion(arr) {
  let newArr = [];

  if (arr.length === 0) {
    return newArr;
  }

  if (arr[0] % 2 !== 0) {
    //take the first element form arr and check if it is odd
    newArr.push(arr[0]); //push the odd to newArr
  }

  newArr = newArr.concat(collectOddValues(arr.slice(1))); //newArr equal the newArr with concat the array that return from this function
  //                                           ^^^^^^^ without the first element
  return newArr;
}

// TASK
function power(num1, num2) {
  if (num2 === 0) return 1;
  return num1 * power(num1, num2 - 1);
}
// console.log(power(2, 0));

// 2
const recursiveRange = (num) => (num === 0 ? 0 : num + recursiveRange(num - 1));
// console.log(recursiveRange(9));

// my solve
// function fib(num) {
//   const arr = [0, 1];
//   let z = 2;
//   function helper(num) {
//     arr[z] = arr[z-2] + arr[z-1]
//     if (z === num) {
//       return arr[z];
//     }
//     z++;
//     return helper(num);
//   }
//   return helper(num);
// }
function fib(n) {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}
// console.log(fib(10));

// taskes
function reverse(word) {
  if (word.length <= 1) {
    return word[0];
  }
  // console.log(word.slice(1));
  // console.log(word[0]);
  let reverseWord = reverse(word.slice(1)) + word[0]; // Fix here
  //                   e                     +   m     from  me
  //                   em                    +   o     from  ome
  //                   emo                   +   s     from  some
  //                   emos                  +   e     from  esome
  //                   emose                 +   w     from  wesome
  //                   emosew                +   a     from  awesome
  console.log(reverseWord);
  return reverseWord;
}
// console.log(reverse("awesome"));

function isPalindrome(word) {
  if (word.length <= 0) return true;
  let sameletter = word[0] === word[word.length - 1];
  if (sameletter) return isPalindrome(word.slice(1, word.length - 1));
  return false;
}
console.log(isPalindrome("atacocata"));
port = 3000;
app.listen(port, () => {
  console.log(`open in port : ${port} ^__-`);
});
