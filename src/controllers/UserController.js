const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const UserModel = require("../models/Users");
const CompanyModel = require("../models/Company");
const ObjectId = require("mongoose").Types.ObjectId;

const validateEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const validAddress = (address) => {
  const re = /^0x[a-fA-F0-9]{40}$/g;
  return re.test(String(address));
};

const checkUserUniqueness = async (field, value) => {
  let error, isUnique;

  ({ error, isUnique } = await CompanyModel.findOne({ [field]: value })
    .exec()
    .then((user) => {
      let res = {};
      if (user) {
        res = {
          error: { [field]: `This ${value} is not available. ` },
          isUnique: false,
        };
      } else {
        res = { error: { [field]: "" }, isUnique: true };
      }

      return res;
    }));

  if (!isUnique) {
    return { error, isUnique };
  }

  ({ error, isUnique } = await UserModel.findOne({ [field]: value })
    .exec()
    .then((user) => {
      let res = {};
      if (user) {
        res = {
          error: { [field]: `This ${value} is not available. ` },
          isUnique: false,
        };
      } else {
        res = { error: { [field]: "" }, isUnique: true };
      }

      return res;
    }));

  return { error, isUnique };
};

const checkForErrors = async function (reqBody) {
  let errors = {};
  const phoneNumRegex = /^[0-9]{10}$/;
  for (let field of Object.keys(reqBody)) {
    if (reqBody[field] === "") {
      errors = { ...errors, [field]: "This field is required." };
    }
    if (field === "email" && !validateEmail(reqBody[field])) {
      errors = { ...errors, [field]: "Not a valid email. " };
    }
    if (field === "email") {
      const check = await checkUserUniqueness(field, reqBody[field]);

      if (field === "email" && !check.isUnique) {
        errors = { ...errors, ...check.error };
      }
    }
    if (field === "phoneNum" && !phoneNumRegex.test(String(reqBody[field]))) {
      errors = { ...errors, [field]: "Invalid Phone Number. " };
    }
    if (field === "wallet_address" && !validAddress(String(reqBody[field]))) {
      errors = { ...errors, [field]: "Invalid Wallet Address. " };
    }
  }
  return errors;
};

module.exports = {
  joinUs: async (req, res) => {
    const name = req.body.name || "";
    const email = req.body.email || "";
    const phone = req.body.phone || "";
    const wallet_address = req.body.wallet_address || "";

    let errors = await checkForErrors({
      name,
      email, 
      phone,
      wallet_address,
    });

    if (Object.keys(errors).length != 0) {
      res.json({
        error: "Incorrect details. ",
        data: {
          ...errors,
        },
      });
    } else {
      const newCompany = new CompanyModel({
        name,
        email,
        phone,
        wallet_address,
      });

      newCompany
        .save()
        .then(() => {
          res.json({
            message: "Success. ",
            data: {},
          });
        })
        .catch((err) => {
          console.log(err);
          res.json({
            error: "Something went wrong. ",
            data: {},
          });
        });
    }
  },

  authenticate: async (req, res) => {
    const email = req.body.email || "";
    const password = req.body.password || "";

    let errors = {};

    if (email === "") {
      errors = { ...errors, email: "This is required field. " };
    }
    if (password === "") {
      errors = { ...errors, password: "This is required field. " };
    }

    if (Object.keys(errors).length > 0) {
      res.json({
        error: "Incorrect details. ",
        data: {
          errors,
        },
      });
    } else {
      UserModel.findOne({ email: email }, (err, userInfo) => {
        if (err) {
          res.json({ message: "Something went wrong", data: {} });
          return err;
        }
        if (userInfo) {
          bcrypt.compare(password, userInfo.password, (err, isMatch) => {
            if (err) {
              console.log(err);
              return err;
            }
            if (isMatch) {
              const token = jwt.sign(
                {
                  userId: userInfo._id,
                  name: userInfo.name,
                  admin: userInfo.admin ? true : false,
                },
                process.env.JWT_KEY,
                { expiresIn: "1h" }
              );
              res.json({
                message: "User signed in successfully. ",
                data: {
                  token: token,
                  admin: userInfo.admin ? true : false,
                  userId: userInfo._id,
                },
              });
            } else {
              res.json({
                error: "Invalid credentials",
                data: {
                  errors: { email: "", password: "Invalid Password. " },
                },
              });
            }
          });
        } else {
          res.json({
            error: "Invalid credentials",
            data: {
              errors: { email: "Username does not exists. ", password: "" },
            },
          });
        }
      });
    }
  },

  confirmCompany: async (req, res) => {
    const companyID = req.body.companyID || "";

    let errors = {};
    if (companyID === "") {
      errors = {
        ...errors,
        companyID: "Please enter a valid company ID",
      };
    }

    if (Object.keys(errors).length != 0) {
      res.json({
        error: "Invalid details",
        data: {
          companyID: "Please enter a valid company ID",
        },
      });
    } else {
      CompanyModel.findOne({ _id: ObjectId(companyID) }, (err, companyInfo) => {
        if (err) {
          res.json({
            error: "Something went wrong",
            data: {},
          });
        } else {
          const newUser = new UserModel({
            name: companyInfo.name,
            email: companyInfo.email,
            phone: companyInfo.phone,
            wallet_address: companyInfo.wallet_address,
            admin: true
          });
          bcrypt.genSalt(10, (err, salt) => {
            if (err) {
              return err;
            } else {
              bcrypt.hash("1", salt, (err, hash) => {
                if (err) {
                  return err;
                } else {
                  newUser.password = hash;
                  newUser
                    .save()
                    .then(() => {
                      CompanyModel.deleteOne({ _id: companyInfo._id })
                        .then(() => {
                          res.json({
                            message: "Success",
                            data: {},
                          });
                        })
                        .catch((err) => {
                          console.log(err);
                          res.json({ error: "Something went wrong", data: {} });
                        });
                    })
                    .catch((err) => {
                      console.log(err);
                      res.json({ error: "Something went wrong", data: {} });
                    });
                }
              });
            }
          });
        }
      });
    }
  },

  isAuthenticated: async (req, res, next) => {
    if (!req.headers["authorization"]) {
      res.status(403).json({ errors: "User not authenticated." });
    } else {
      const authHeader = req.headers["authorization"];
      const authToken = authHeader.split(" ")[1];

      if (authToken) {
        jwt.verify(authToken, process.env.JWT_KEY, (err, decoded) => {
          if (err) {
            if (err.name === jwt.TokenExpiredError.name) {
              res.status(440).json({ error: "Session Expired", data: {} });
            } else {
              res.status(401).json({ error: "Failed to authenticate.", data: {} });
            }
          } else {
            req.userId = decoded.userId;
            next();
          }
        });
      } else {
        res.status(403).json({ error: "User not authenticated.", data: {} });
      }
    }
  },

  isAdmin: async (req, res, next) => {
    if (!req.headers["authorization"]) {
      res.status(403).json({ errors: "No token provided." });
    } else {
      const authHeader = req.headers["authorization"];
      const authToken = authHeader.split(" ")[1];

      if (authToken) {
        jwt.verify(authToken, process.env.JWT_KEY, (err, decoded) => {
          if (err) {
            if (err.name === "TokenExpiredError") {
              res.status(440).json({ error: "Session Expired.", data: {} });
            } else {
              res.status(401).json({ error: "Failed to authenticate. ", data: {} });
            }
          } else {
            if (decoded.admin) {
              next();
            } else {
              res.status(403).json({ error: "Not an Admin", data: {} });
            }
          }
        });
      } else {
        res.status(403).json({ error: "No token provided.", data: {} });
      }
    }
  },
};
