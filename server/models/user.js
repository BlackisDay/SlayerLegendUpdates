const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require('bcrypt');

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minlength: 5
  },
});


// set up pre-save middleware to create password
userSchema.pre('save', async function(next) {
  try {
    // Check if the password field is modified and not empty
    if (this.isModified('password') && this.password) {
      const saltRounds = 10;
      this.password = await bcrypt.hash(this.password, saltRounds);
    }
    next();
  } catch (error) {
    console.log(error); // Pass error to the next middleware
  }
});

// Method to compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function(password) {
  return await bcrypt.compare(password, this.password);
};



const Users = mongoose.model('User', userSchema);

module.exports = Users;