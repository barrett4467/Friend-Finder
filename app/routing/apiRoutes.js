var path = require("path");
var friends = require("../data/friends");

module.exports = function(app){
    app.get("/api/friends", function(req, res){
        res.json(friends);
    })

    app.post("/api/friends", function(req, res) {
          friends.push(req.body);
          var compatibility = [];
          var scores = [];
          var newFriend;
          var oldFriend;
          friends.forEach(function(friend, i){
        
                var total = 0;
                var newScores = req.body.scores;
                var oldScores = friend.scores;
                newFriend = req.body.name;
                oldFriend = friend.name;

                if (newFriend != oldFriend){
                    // console.log("Friend:");
                    // console.log("New: " + newFriend);
                    // console.log("Old: " + oldFriend);
                    newScores.forEach(function(score){
                        thisNewScore = parseInt(score);
                    })
                    oldScores.forEach(function(score){
                        thisOldScore = parseInt(score);
                    })
                    total = Math.abs(thisNewScore - thisOldScore);
                    // console.log("this new: "+ thisNewScore);
                    // console.log("this old: "+ thisOldScore);
    
    
                    // console.log("Total Difference " + i + ": " + total);

                } else {
                    return console.log("oops these are the same person");
                }
                
                compatibility.push({name: friend.name, photo: friend.photo, difference: total});
                
 
            })
                var smallest = 0;
                for (var i = 0; i < compatibility.length; i++){
                    var difference = compatibility[i].difference;
                    scores.push(difference);
                    if(compatibility[i].name != oldFriend){
                        smallest = Math.min.apply(Math, scores); 
                        if (smallest === compatibility[i].difference){
                            var bestMatch = { name: compatibility[i].name, photo: compatibility[i].photo} ;
                            
                        }
                    }
                }
                


                // console.log("Smallest Difference: ");
                // console.log(smallest);
                // console.log("Compatibility: ");
                // console.log(compatibility);
                console.log("Best Match: ");
                console.log(bestMatch);

                // friends.push({bestMatch: bestMatch});
                res.json({name: bestMatch.name, photo: bestMatch.photo});
            

      });
    

}