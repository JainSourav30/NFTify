const { ethers } = require("ethers");
require("dotenv").config();
const { abi } = require("../ABI.json");
const { NFTStorage, File } = require("nft.storage");
const ProductModel = require("../models/Products");
const ObjectId = require("mongoose").Types.ObjectId;
const fs = require("fs");
const request = require("request");

const contractAddress = "0x10acBd9Ff07F959F9C277AAdd277960F47C362FF";
const provider = new ethers.providers.JsonRpcProvider(process.env.POLYGON_URI);
const signer = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
const contract = new ethers.Contract(contractAddress, abi, signer);

const API_KEY = process.env.NFT_STORAGE_API_KEY;
const client = new NFTStorage({ token: API_KEY });

const download = async (uri, filename, callback) => {
  await request.head(uri, async function () {
    await request(uri)
      .pipe(fs.createWriteStream(filename))
      .on("close", callback);
  });
};

module.exports = {
  mint: async (req, res) => {
    const product_id = req.body.product_id || "";
    const category_id = req.body.category_id || "";

    ProductModel.findOne(
      { _id: ObjectId(category_id) },
      async (err, result) => {
        if (err) {
          console.log(err);
          res.json({
            error: "Something went wrong",
            data: {},
          });
        } else {
          if (result) {
            await download(result.img, "./temp/temp.png", async () => {
              const metadata = await client.store({
                name: `${result.category_name}-${product_id}`,
                description: `An authencity certificate NFT`,
                dateOfCreation: Date.now(),
                image: new File(
                  [await fs.promises.readFile("./temp/temp.png")],
                  `${result.category_id}-${product_id}.png`,
                  { type: "image/png" }
                ),
              });
              console.log(metadata.url);
              const data = await contract.mintNFT(signer.address, metadata.url);
              console.log(data);
              fs.unlinkSync("./temp/temp.png");
              res.json({
                message: "Success",
                data: {
                  nft_hash: data.hash
                }
              });
            });
          } else {
            res.json({
              error: "Something went wrong",
              data: {},
            });
          }
        }
      }
    );
  },
};
