const express = require("express");

const https = require("node:https");

const app = express();

app.get("/", function (req, res) {
  https.get();
  res.send("i see you");
});

// let https;
// try {
//   https = require("node:https");
// } catch (err) {
//   console.error("https support is disabled!");
// }

// https
//   .get("https://encrypted.google.com/", (res) => {
//     console.log("statusCode:", res.statusCode);
//     console.log("headers:", res.headers);

//     res.on("data", (d) => {
//       process.stdout.write(d);
//     });
//   })
//   .on("error", (e) => {
//     console.error(e);
//   });

app.listen(3000, function () {
  console.log("Server is running on 3000");
});
