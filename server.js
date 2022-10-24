
require("dotenv").config();
// Web server config
const PORT = process.env.PORT || 8080;
const express = require("express");
const app = express();
const cookieParser = require('cookie-parser');
// use middleware
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static("public"));
// get routes
app.get( "/", (req, res) => {
  res.render('index')
})
// post routes



app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});