var express = require("express");
var path = require("path");
var PORT = process.env.PORT || 3000;

var app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//this is what connects the routing files
require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);




app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });
  