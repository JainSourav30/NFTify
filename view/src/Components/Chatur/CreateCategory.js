import React, { useState, useEffect } from "react";
import { MdOutlineCategory } from "react-icons/md";
import useNFTityStore from "../../store";
import { useQuery } from "react-query";

const CreateCategory = () => {
  const [file, setFile] = useState();
  const [name, setName] = useState("");
  const [user_id, token, logout] = useNFTityStore(state => [state.user_id, state.jwtToken, state.logout]);
  const { data: productData, refetch } = useQuery(["newProduct", file, name, user_id, token], () =>
    send(file, name, user_id, token), {
      enabled: false,
    }
  );

  const send = async (file, name, user_id, token) => {
    const frm = new FormData();
    frm.append("image", file); 
    frm.append("category_name", name);
    frm.append("user_id", user_id);

    const data = await fetch("http://localhost:5001/api/products/new", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: frm,
    }).then(res => res.json());

    return data;
  }

  useEffect(() => {
    if (productData?.error) {
      if (productData?.error === "Session Expired") {
        logout();
      }
    } else if (productData?.message) {
      console.log(productData);
    }
  }, [productData, logout]);

    return (
	<form className=" relative flex flex-col justify-around items-center h-1/2 w-full  px-40 py-24 rounded-lg bg-gradient-to-b from-blue-200 to-purple-300 ">
      <div className="text-2xl font-semibold m-6">Enter Product Category and Image</div>
      <div className="flex flex-col justify-evenly items-center h-60 w-full bg-gray-100 p-4 rounded-lg border-4 border-black">
        <div className="border-2 border-black rounded-lg flex justify-left w-full text-gray-600 bg-white ">
          <MdOutlineCategory size={25} />
          <input
            type="text"
            name="name"
            value={name}
            placeholder="Category Name"
            className="w-full mx-2 "
            onChange={(e) => {setName(e.target.value)}}
          />
        </div>
        <div className="border-2 border-black rounded-lg flex justify-left w-full text-gray-600 bg-white ">
          <input
            type="file"
            name="name"
            filename={file}
            placeholder="Enter Image of the Photo"
            className="w-full mx-2 "
            accept="image/"
            onChange={(e) => {setFile(e.target.files[0])}}
          />
        </div>
      </div>

      <button
        className="bg-violet-700 text-white border-2 rounded-lg border-black p-1 mt-4 w-4/5"
        onClick={(e) => {
          e.preventDefault();
          refetch();
        }}
      >
        Send
      </button>
    </form>
  );
};

export default CreateCategory;
