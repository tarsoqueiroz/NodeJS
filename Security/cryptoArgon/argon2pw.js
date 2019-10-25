// source: https://www.youtube.com/watch?v=fEV3D0ZuBgM

const express     = require("express");
const bodyParser  = require("body-parser");
const argon2      = require("argon2");

let   validUser   = "tarso";
let   validPass   = "password";
const app         = express();

app.use(bodyParser.json({ type: "application/json" }));
app.use(bodyParser.urlencoded({ extended: true }));

app.set("port", 8080);

app.post("/login", async(req, res) => {
  console.log("On login:", req.body);
  const userName = req.body.username;
  const passWord = req.body.password;

  if (userName == validUser) {
    if (await argon2.verify(validPass, passWord)) {
      res.json("Login successful");
    } else {
      res.json("Wrong password");
    }
  } else {
   res.json("User invalid");
  }
});

app.post("/change", async(req, res) => {
  console.log("On change:", req.body);
  const userName = req.body.username;
  const passWord = req.body.password;

  validUser = userName;
  validPass = await argon2.hash(passWord);

  console.log("MEMORY username:", validUser, " password:", validPass);
  res.json("Successful change");
});

console.log("MEMORY username:", validUser, " password:", validPass);

app.listen(app.get("port"), () => {
  console.log("Listening on port " + app.get("port"));
});
