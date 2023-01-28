const bcrypt = require("bcrypt");

bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash("1", salt, (err, hash) => {
      if (err) {
        return err;
      } else {
        // newUser.password = hash;
        // newUser
        //   .save()
        //   .then(() => {
        //     CompanyModel.remove({ _id: companyInfo._id })
        //       .then(() => {
        //         res.json({
        //           message: "Success",
        //           data: {},
        //         });
        //       })
        //       .catch((err) => {
        //         console.log(err);
        //         res.json({ error: "Something went wrong", data: {} });
        //       });
        //   })
        //   .catch((err) => {
        //     console.log(err);
        //     res.json({ error: "Something went wrong", data: {} });
        //   });

        console.log(hash);
      }
    });
});