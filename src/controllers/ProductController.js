const UserModel = require("../models/Users");
const CompanyModel = require("../models/Company");
const ProductModel = require("../models/Products");
const ObjectId = require("mongoose").Types.ObjectId;
const cloudinary = require("cloudinary").v2;
const Data_uri = require("datauri/parser");
const path = require("path");

require("dotenv").config();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

module.exports = {
  addProduct: async (req, res) => {
    const category_name = req.body.category_name || "";
    const user_id = req.body.user_id || "";
    console.log({category_name, user_id});
    if (category_name === "") {
      res.json({
        error: "Invalid Inputs",
        data: {
          category_name: "Enter a valid category name",
        },
      });
    } else if (user_id === "") {
      res.json({
        error: "Invalid Inputs",
        data: {
          user_id: "Enter a valid User ID",
        },
      });
    } else if (req.file === undefined || req.file === null) {
      res.json({
        error: "Invalid Inputs",
        data: {
          image: "Enter a valid image",
        },
      });
    } else {
      let data_uri_parser = new Data_uri();
      data_uri_parser.format(
        path.extname(req.file.originalname).toString(),
        req.file.buffer
      );
      const file = data_uri_parser.content;

      const newProduct = new ProductModel({
        category_name,
        user_id,
        img: "temp",
      });

      await cloudinary.uploader.upload(
        file,
        {
          resource_type: "image",
          public_id: `images/${newProduct.category_name}`,
          overwrite: true,
        },
        (err, result) => {
          if (err) {
            console.log(err);
          } else {
            newProduct.img = result.secure_url;
            newProduct
              .save()
              .then(() => {
                res.json({
                  message: "Success",
                  data: {},
                });
              })
              .catch((err) => {
                console.log(err);
                res.json({
                  error: "Something went wrong",
                  data: {},
                });
              });
          }
        }
      );
    }
  },

  getAll: async (req, res) => { 
    console.log(req.userId);

    ProductModel.find({user_id: req.userId}, (err, data) => {
      if (err) {
        console.log(err);
        res.json({
          error: "Something went wrong",
          data: {},
        });
      } else {
        res.json({
          message: "Success",
          data,
        });
      }
    })
  }
};
