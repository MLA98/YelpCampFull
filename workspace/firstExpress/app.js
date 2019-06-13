var express = require("express");
var app = express();


app.get("/", function(req, res){
    res.send("Hi there!");
});

app.get("/hha", function(req, res){
    res.send("xixi");
});

app.get("/hha/:didi", function(req, res){
    console.log(req.params);
    res.send("miss!");
});

app.get("*", function(req, res){
    res.send("迷路了!");
});

app.listen(3000);