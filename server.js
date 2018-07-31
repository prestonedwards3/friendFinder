var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var friends = require('./app/data/friends.js');


var app = express();
var PORT = process.env.PORT || 3005;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "./app/public/home.html"));
  });
app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "./app/public/survey.html"));
  });

  require("./app/routing/apiRoutes.js")(app);
  
  
  //-----------------------------------------------------------------------------------------------------------------------



