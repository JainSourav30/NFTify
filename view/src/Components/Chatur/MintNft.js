import React, {useState} from "react";
import {TiSortAlphabeticallyOutline} from "react-icons/ti";

const MintNft = () => {

	const [close, setClose] = useState(0);

	return (
        !close?
    	<div className=" relative flex flex-col justify-around items-center h-56 w-1/2 border-4 p-10 border-black rounded-lg bg-gradient-to-b from-blue-200 to-purple-300 ">
            <div className="absolute top-0 right-0 ">
                <button className="pr-1 pt-0 text-lg font-semibold" onClick={(e)=>{e.preventDefault();setClose(1);}}>x</button>
            </div>



        <div className="text-2xl m-6 font-semibold">Enter the Product ID of the product</div>
        <div className="border-2 border-black rounded-lg flex justify-left w-5/6 text-gray-600 bg-white ">
            <TiSortAlphabeticallyOutline size={25} />
            <input
                type="text"
                name="name"
                placeholder="ProductID"
                className="w-full mx-2 "
            />
        </div>

            <div className="flex w-full justify-around">
                <button className="bg-violet-700 hover:bg-gray-200 text-white border-2 hover:text-black w-1/3 rounded-lg border-black p-1 mt-4 ">Submit</button>
            </div>
        </div>
        :
        null
    );
}

export default MintNft;