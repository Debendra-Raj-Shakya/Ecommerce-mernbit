const mongoose = require("mongoose");
const bcrypt =require('bcrypt')
const validator=require('validator')

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    validate:[validator.isEmail,"email is not valid"]


  },
  password: {
    type: String,
    required: true,
    // minlength:[6, "password must be 6 length"]

  },
});

userSchema.pre('save',async function (next){
  const salt=await bcrypt.genSalt();
  this.password=await bcrypt.hash(this.password,salt)
  next();
})
const User = new mongoose.model("User", userSchema);

module.exports = User;
