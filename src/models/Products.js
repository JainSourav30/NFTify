const { Schema, model } = require("mongoose");
const ObjectId = require("mongoose").ObjectId;

const ProductSchema = new Schema({
  user_id: {
    type: ObjectId,
    required: true,
  },
  category_name: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
    trim: true,
  }
});

module.exports = model('Products', ProductSchema);