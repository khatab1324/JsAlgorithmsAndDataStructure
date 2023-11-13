const exprevss = require("express");
const app = exprevss();

// we will go bake to fibonacci sequence
function fib(n) {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}
// the time complixty is (2^n)!!!!!!!!!!!!
// that becaus fib repeat the claculate like this
//                          fib(7)
//               ____________|_______________
//               |                          |
//              fib(6)                    fib(5)
//         ______|______              ______|_______
//         |           |              |            |
//       fib(5)      fib(4)         fib(4)        fib(3)
//
//look for that the fib(5) and fib(4) fib.......   all thes repeated alot without save

// because of that we will use dynamic programe to solve this problem
// dynamic programe => A method for solving a conplex problem by breaking it down into a collection of simpler subproblems, solving each of those subproblems just once, and storing their solutions
// that mean what if i remember all the fib(5) and fib(4)...... that called memoization

// memoization => storing the result of expensive function calls and returning the cached result when the same inputs occur again

function fibo(n, memo = []) {
  if (memo[n] !== undefined) return memo[n]; //if memo[n] exist return it
  if (n <= 2) return 1;
  var res = fibo(n - 1, memo) + fibo(n - 2, memo);
  memo[n] = res; //push the res to memo[n]
  return res;
}
// the time complexty is o(n). to know why 247
// NOTE : there is problem there is max for stak call if you like say fibo(1000) this will cause stack size error
console.log(fibo(7));

// the better way to do that is use tabulation =>bottom to up
// proprity
// -storing the result of a previous result in a "table"(usually an array)
// -Usually done using iteration
// -better space complexity can be achieved using tabulation
function fib_table(n) {
  if (n <= 2) return 1;
  let fibNums = [0, 1, 1];
  for (let i = 3; i <= n; i++) {
    fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
  }
  return fibNums[n];
}
console.log(fib_table(1000));
port = 3000;
app.listen(port, () => {
  console.log(`open in port : ${port} ^__-`);
});
