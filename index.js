const express = require("express");
const req = require("express/lib/request");
const port = process.env.PORT || 5000;

const app = express();

// app.get("/", (req, res) => {
//   res.send("Hello Word !");
// });

app.listen(port, () => {
  console.log("Serveur est en ligne!");
});
