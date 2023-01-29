import React, { useState } from "react";
import testImage from "../../Assets/test_img.jpg";
import MintNft from "../Chatur/MintNft";

const ProductCard = () => {
  const [isModal, setIsModal] = useState(false);

  const productList = [
    { key: 1, prodName: "Test Product 1", prodImg: testImage },
    { key: 2, prodName: "Test Product 2", prodImg: testImage },
    { key: 3, prodName: "Test Product 3", prodImg: testImage },
    { key: 4, prodName: "Test Product 4", prodImg: testImage },
  ];

  const handleModal = (key) => {
    setIsModal(!isModal);
  };

  return (
    <div className="w-screen">
      <div className="grid lg:grid-cols-3 lg:gap-2 md:grid-cols-2  sm:grid-cols-1  m-5">
        {productList.map((prod, key) => {
          return (
            <div
              key={key}
              className="max-w-sm bg-white border border-gray-200 rounded-lg shadow m-auto"
            >
              <img className="rounded-t-lg" src={prod.prodImg} alt="" />
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
                    {prod.prodName}
                  </h5>
                </a>
                <div className="inline-flex w-11/12">
                  <button
                    className=" m-auto px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600"
                    onClick={() => {
                      handleModal(key);
                    }}
                  >
                    Mint NFT
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {isModal == true ? (
        <MintNft setModal={setIsModal} />
      ) : (
        console.log("no modal")
      )}
    </div>
  );
};

export default ProductCard;
