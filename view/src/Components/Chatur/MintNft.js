import React, { useState, useEffect } from "react";
import { TiSortAlphabeticallyOutline } from "react-icons/ti";
import { useLocation } from "react-router-dom";
import useNFTityStore from "../../store";
import {useQuery} from "react-query";

const mintIt = async (token, category_id, product_id) => {
	const data = await fetch("http://localhost:5001/api/nft/mint", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
		},
		body: JSON.stringify({category_id, product_id}),
	}).then(res => res.json());

	return data;
};

const MintNft = () => {
  const {state: {category_id}} = useLocation();
	const [product_id, setID] = useState("");
	const [token, logout] = useNFTityStore((state) => [
    state.jwtToken,
    state.logout,
  ]);

	const { data: nftData, refetch } = useQuery(["products", token, category_id, product_id], () => mintIt(token, category_id, product_id),
		{
			enabled: false,
		}
  );

	useEffect(() => {
    if (nftData?.error) {
      if (nftData?.error === "Session Expired") {
        logout();
      }
    } else if (nftData?.message) {
      console.log(nftData);
    }
  }, [nftData, logout]);

  return (
    <div className=" relative flex flex-col justify-around items-center h-96 w-full px-64 rounded-lg bg-gradient-to-b from-blue-200 to-purple-300 ">
      {/* <div className="absolute top-0 right-0 ">
                <button className="pr-1 pt-0 text-lg font-semibold" onClick={(e)=>{e.preventDefault();setClose(1);}}>x</button>
            </div> */}

      <div className="text-2xl m-6 font-semibold">
        Enter the Product ID of the product
      </div>
      <div className="border-2 border-black rounded-lg flex justify-left w-5/6 text-gray-600 bg-white ">
        <TiSortAlphabeticallyOutline size={25} />
        <input
          type="text"
          name="name"
					value={product_id}
          placeholder="ProductID"
          className="w-full mx-2 "
					onChange={(e) => {setID(e.target.value)}}
        />
      </div>

      <div className="flex w-full justify-around">
        <button className="bg-violet-700 hover:bg-gray-200 text-white border-2 hover:text-black w-1/3 rounded-lg border-black p-1 mt-4 " onClick={(e) => {
					e.preventDefault();
					refetch();
				}}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default MintNft;
