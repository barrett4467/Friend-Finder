var path = require("path");
var friends = require("../data/friends");

module.exports = function(app){
    app.get("/api/friends", function(req, res){
        res.json(friends);
    })

    app.post("/api/friends", function(req, res) {
          friends.push(req.body);
          res.json(true);
          var compatibility = [];
          friends.forEach(function(friend, i){
                var total = 0;
                var newScores = req.body.scores;
                var oldScores = friend.scores;
                var newFriend = req.body.name;
                var oldFriend = friend.name;


                if (newFriend != oldFriend){
                    console.log("Friend:");
                    console.log("New: " + newFriend);
                    console.log("Old: " + oldFriend);
                    newScores.forEach(function(score){
                        thisNewScore = parseInt(score);
                    })
                    oldScores.forEach(function(score){
                        thisOldScore = parseInt(score);
                    })
                    total = Math.abs(thisNewScore - thisOldScore);
                    console.log("this new: "+ thisNewScore);
                    console.log("this old: "+ thisOldScore);
    
    
                    console.log("Total Difference " + i + ": " + total);

                } 
                
                compatibility.push({name: friend.name, difference: total});
                
                // console.log("NEW");
                // console.log(newScores);
                // console.log("OLD");
                // console.log(oldScores);
                // var compatibility = newScores - 
            })
            console.log(compatibility);
            compatibility.forEach(function(score){
                console.log(score.difference);
            })

      });
    
}
