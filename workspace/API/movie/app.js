const request = require("request");
const express = require("express");
var app = express();
app.set("view engine", "ejs");
// const request = require("request");

app.get("/", function(req, res){
    res.render("Search");
});

app.get("/result", function(req, res){
    var searchItem = req.query.search;
    request("http://www.omdbapi.com/?s=" + searchItem + "&apikey=thewdb", function(error, response, body){
        if (!error && response.statusCode == 200){
            var parsedData = JSON.parse(body);
            // res.send(parsedData["Search"][0]['Title']);
            res.render("result", {data: parsedData});
        }
    });
});

app.listen(4396, process.env.IP, function(){
    console.log("Yelp app is started");
});