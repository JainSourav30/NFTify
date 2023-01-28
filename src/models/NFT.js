const { Schema, model } = require("mongoose");
const ObjectId = require("mongoose").ObjectId;

const NFTSchema = new Schema({
  product_id: {
    type: String,
    required: true,
  },
  category_id: {
    type: ObjectId,
    required: true,
  },
  nft_address: {
    type: String, 
    required: true,
    trim: true,
  }
});

module.exports = model('NFT', NFTSchema);