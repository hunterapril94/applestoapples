
require("dotenv").config();
// Web server config
const PORT = process.env.PORT || 8080;
const express = require("express");
const app = express();
const cookieParser = require('cookie-parser');
const bodyparser = require('body-parser')
// use middleware
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static("public"));
app.use(bodyparser.urlencoded({extended: true}));

// helpers
const {fetchGreen, deal, playCard} = require('./helpers')
// get routes
app.get( "/", (req, res) => {
  res.render('index')
})
// post routes
app.post("/newPlayer", (req, res) => {

})
app.post("/newGame", (req, res) => {

})
app.post("/deal", (req, res) => {

})
app.post("/playCard", (req, res) => {

})
app.post("/selectWinner", (req, res)=>{

})



app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});