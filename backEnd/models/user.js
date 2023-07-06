
const mongoose = require('mongoose');

const { Schema } = mongoose;

const User = new Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  companyName: {
    type: String,
    required: true
  },
  companyId: {
    type: String,
  },
  phoneNumber: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  city: {
    type: String,
  },
  adress: {
    type: String,
  },
  typeBusiness: {
    type: String,
  },
  role: {
    type: String,
  },
  password: {
    type: String,
    required: true,
  },
}, { timestamps: true });

module.exports = mongoose.model('User', User);