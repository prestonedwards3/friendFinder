//api routes
var friends = require('../data/friends.js');

module.exports = function(app){
app.get("/api/friends", function(req, res) {
    return res.json(friends);
  });

  app.post("/api/friends", function(req, res) {
    //push data to an array of friends 
    var newFriend = req.body;
    friends.push(newFriend);
    res.json(newFriend);

    //logic for determining compatability
    var newFriendScores = req.body.scores;
    var scoresArray = [];
    var friendCount = 0;
    var bestMatch = 0;

    
    for(var i = 0; i < friends.length-1; i++){
      var scoresDiff = 0;

      // compare friends
      for(var p=0; p<newFriendScores.length; p++){
        scoresDiff += (Math.abs(parseInt(friends[i].scores[p]) - parseInt(newFriendScores[p])));
        //console.log(`scores dif ${scoresDiff}`);
      }

      scoresArray.push( scoresDiff);
      console.log(scoresArray);
    }

    //find best match
    for(var i=0; i<scoresArray.length - 1; i++){
      if(scoresArray[i] <= scoresArray[bestMatch]){
        bestMatch = i;
        console.log(`best match ${bestMatch}`);
      }
    }

    //return bestMatch data
    var match = friends[bestMatch];
    return res.json(match);

    //pushes new submission into the friendsList array
    friends.push(req.body);

  });
}