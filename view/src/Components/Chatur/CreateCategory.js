import React from "react";
import {GiBarbedSpear} from "react-icons/gi";
import { MdOutlineCategory } from "react-icons/md";


const CreateCategory = () => {

    return (
	<form className=" relative flex flex-col justify-around items-center h-1/2 w-full px-40 py-24 rounded-lg bg-gradient-to-b from-blue-200 to-purple-300 ">
      <div className="text-2xl font-semibold m-6">Enter Product Category and Image</div>
      <div className="flex flex-col justify-evenly items-center h-60 w-full bg-gray-100 p-4 rounded-lg border-4 border-black">
        <div className="border-2 border-black rounded-lg flex justify-left w-full text-gray-600 bg-white ">
            <MdOutlineCategory size={25}/>
          <input
            type="text"
            name="name"
            placeholder="Category Name"
            className="w-full mx-2 "
						onChange={(e) => {}}
          />
        </div>
        <div className="border-2 border-black rounded-lg flex justify-left w-full text-gray-600 bg-white ">
          <input
            type="file"
            name="name"
            placeholder="Enter Image of the Photo"
            className="w-full mx-2 "
						onChange={(e) => {}}
          />
        </div>
      </div>

      <button className="bg-violet-700 text-white border-2 rounded-lg border-black p-1 mt-4 w-4/5" onClick={(e) => {
				e.preventDefault();
			}}>
        Send
      </button>
    </form>
  );
}

export default CreateCategory;