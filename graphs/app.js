const express = require("express");
const app = express();

const port = 3500;
app.listen(port, () => {
  console.log("we open in the port " + port);
});
