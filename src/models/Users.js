const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    trim: true,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    trim: true,
    required: true,
  },
  admin: {
    type: Boolean,
    default: false,
  },
  wallet_address: {
    type: String,
    required: true,
    trim: true,
  }
});

module.exports = model('Users', UserSchema);