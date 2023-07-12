
const mongoose = require('mongoose');

const { Schema } = mongoose;

const User = new Schema({
  fullName: {
    type: String,
  },
  companyName: {
    type: String,
  },
  companyId: {
    type: Schema.Types.ObjectId,
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
  occupation:{
    type:String,
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