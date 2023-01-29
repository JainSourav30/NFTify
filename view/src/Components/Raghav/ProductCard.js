import React, { useEffect, useState } from "react";
import MintNft from "../Chatur/MintNft";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import useNFTityStore from "../../store";
import plusImage from "../../Assets/plus_sign.png";

const getAllProducts = async (token) => {
  const data = await fetch("http://localhost:5001/api/products/", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => res.json());

  return data;
};

const ProductCard = () => {
  const [isModal, setIsModal] = useState(false);
  const [token, logout] = useNFTityStore((state) => [
    state.jwtToken,
    state.logout,
  ]);
  const [productList, setList] = useState([]);
  const { data: productData } = useQuery(["products", token], () =>
    getAllProducts(token)
  );

  useEffect(() => {
    if (productData?.error) {
      if (productData?.error === "Session Expired") {
        logout();
      }
    } else if (productData?.message) {
      let c = productData.data.map((item, index) => ({
        key: index,
        prodName: item.category_name,
        prodImg: item.img,
      }));
      setList(c);
    }
  }, [productData, logout]);

  const handleModal = (key) => {
    setIsModal(!isModal);
  };

  return (
    <div className="w-screen">
      <div className="grid lg:grid-cols-3 lg:gap-2 md:grid-cols-2  sm:grid-cols-1  m-5">
        <div className=" max-w-xs bg-white border border-gray-200 rounded-xl shadow m-auto">
          <button className="shadow-sm hover:shadow-xl hover:shadow-violet-500 transition-all">
            <img src={plusImage} className="rounded-t-lg p-6" />
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
                Add Product
              </h5>
            </div>
          </button>
        </div>
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
                  <Link to={"/mint-nft"}>
                    <button
                      className=" m-auto px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600"
                      onClick={() => {
                        handleModal(key);
                      }}
                    >
                      Mint NFT
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {isModal ? <MintNft setModal={setIsModal} /> : console.log("no modal")}
    </div>
  );
};

export default ProductCard;
