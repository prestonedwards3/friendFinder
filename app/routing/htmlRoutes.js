//Dependencies
var path = require('path');

//ROUTING

module.exports = function(app){
  //default GET route that leads to home.html - displays home page
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "./app/public/home.html"));
  });
app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "./app/public/survey.html"));
  });
};



/*
  app.get('/survey', function (req, res) {
    res.sendFile(path.join(__dirname + '/../public/survey.html'));
  });

  //a USE route to home page
  app.use(function (req, res) {
    res.sendFile(path.join(__dirname + '/../public/home.html'));
  });

  */