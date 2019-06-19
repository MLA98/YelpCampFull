var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo");

// POST: title, content
var postSchema = new mongoose.Schema({
    title: String,
    content: String
});

// USER: email, name
var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [postSchema]
});
var User = mongoose.model("User", userSchema);




var postModel = mongoose.model("Post", postSchema);

// var newUser = new User({
//     email: "kkk@P.com",
//     name: "AA11",
// });

// newUser.posts.push({
//     title: "How to ooo",
//     content: "OOOoooOOOo"
// });


// newUser.save(function(err, user){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(user);
//     }
// });

// var newPost = new postModel({
//     title: "Aple",
//     content: "I luv Aple"
// });

// newPost.save(function(err, post){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(post);
//     }
// })

User.findOne({name: "AA11"}, function(err, user){
    if(err){
        // console.log(err);
    } else {
        user.posts.push({
            title: "3 Things I really hate",
            content: "Voldemort.  Voldemort. Voldemort"
        });
        user.save(function(err, user){
            if(err){
                console.log(err);
            } else {
                console.log(user);
            }
        });
    }
});