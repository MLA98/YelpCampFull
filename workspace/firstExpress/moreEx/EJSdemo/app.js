var express = require("express");
var app = express();

app.get("/", function(req, res){
    res.render("home.ejs");
    res.send("Welcome to Home Page!")
});

app.get("/fall/:thing", function(req, res){
    var thing = req.params.thing;
    res.send("You like" + thing);
});

app.listen(4396, process.env.IP, function(){
    console.log("Listening.");


});