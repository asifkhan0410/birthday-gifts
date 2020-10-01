

const mongoose = require("mongoose");
const {Schema} = mongoose;
const userSchema = new Schema({
    googleID: String,
    userName: String,
    wishlists:[{
        desc : String,
        imagelink: String,
        reason : String,
        productlink : String,
    }]
    
});
mongoose.model("users", userSchema);
