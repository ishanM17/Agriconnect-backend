const mongoose = require('mongoose');
const validator = require('validator');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');
const crypto = require('crypto');

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    maxLength: [30, 'Your name cannot exceed 30 characters'],
    minLength: [3, 'Your name must be at least 3 characters long']
  },
  email: {
    type: String,
    required: [true, 'Please enter your email'],
    unique: true,
    validate: [validator.isEmail, 'Please enter a valid email address']
  },
  password: {
    type: String,
    required: [true, 'Please enter your password'],
    minLength: [6, 'Your password must be at least 6 characters long']
  },
  role: {
    type: String,
    required: true,
    enum: ["Farmer", "Industry Buyer", "Transport Facilitator"],
    default: "user",
  },
  token: String,
});

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
      next();
    }
    this.password = await bcrypt.hash(this.password, 10);
});

userSchema.methods.comparePassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model('User', userSchema);