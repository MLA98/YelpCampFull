var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cat_app");

var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

var Cat = mongoose.model("Cat", catSchema);

// var geo = new Cat({
//     name: "XIXIXI",
//     age: 11,
//     temperament: "??"
// });
// geo.save(function(err, cat){
//     if(err){
//         console.log("WRONG!");
//     }
//     else{
//         console.log("SAVED");
//         console.log(cat);
//     }
// });

Cat.create({
    name: "GOUGE",
    age: 88,
    temperament: "orphan"
},function(err, cat){
    if(err){
        console.log("NONONONONO");
    }
    else{
        console.log(cat);
    }
});

Cat.find({}, function(err, cats){
    if(err){
        console.log("ERROR");
    }
    else{
        console.log(cats);
    }
});
// adding a new cat to the DB

// retrieve all cats from the DB and console.log each one