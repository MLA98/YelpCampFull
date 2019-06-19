var mongoose = require("mongoose");

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

//  var Post = mongoose.model("Post", postSchema);
 module.exports = User;