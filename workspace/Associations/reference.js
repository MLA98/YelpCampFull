var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo_2");
var Post = require("./models/post");
var User = require("./models/user");

// POST - title, content
var postSchema = new mongoose.Schema({
   title: String,
   content: String
});
var Post = mongoose.model("Post", postSchema);

// USER - email, name
var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post"
        }
    ]
});
var User = mongoose.model("User", userSchema);

// User.create({
//     email: "buyu@uc.edu",
//     name: "HAHA"
// });

// Post.create({
//     title: "How to drive safe p2",
//     content: "Stay clam !!"
// }, function(err, post){
//     User.findOne({email: "buyu@uc.edu"}, function(err, foundUser){
//         if(err){
//             console.log(err);
//         }
//         else{
//             foundUser.posts.push(post);
//             foundUser.save(function(err, data){
//                 if(err){
//                     console.log(err);
//                 }
//                 else{
//                     console.log(data);
//                 }
//             });
//         }
//     });
// });



// Find user
// find all posts for that user

// User.findOne({email: "xx"}).populate("posts").exec(function(err, user){
//     if(err){

//     }
//     else{
//         console.log("user");
//     }
// });