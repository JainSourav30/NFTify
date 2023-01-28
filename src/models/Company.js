const { Schema, model } = require("mongoose");

const CompanySchema = new Schema({
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
  wallet_address: {
    type: String,
    required: true,
    trim: true,
  }
});

module.exports = model('Company', CompanySchema);