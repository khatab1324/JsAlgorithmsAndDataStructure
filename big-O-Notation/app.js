const express = require("express");
const app = express();

//big o =>it's system It's a way of generalizing code and talking about it and comparing code and its performance to other pieces of code.

function sumAllNumber(n) {
  return (n * (n + 1)) / 2;
}
console.log(sumAllNumber(100000));
//

port = 3000;
app.listen(port, () => {
  console.log(`open in port : ${port} ^__-`);
});
