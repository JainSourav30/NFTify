import React, { useEffect, useState } from "react";
import { RxAvatar } from "react-icons/rx";
import { MdAlternateEmail } from "react-icons/md";
import { HiPhoneArrowDownLeft } from "react-icons/hi2";
import { FaBitcoin } from "react-icons/fa";
import { useQuery } from "react-query";
import {GiBarbedSpear} from "react-icons/gi";

const handleJoinUs = async ( email, phone, name, wallet_address ) => {
	const data = await fetch("http://localhost:5001/api/users/joinus", {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify({email, phone, name, wallet_address}),
	}).then(res => res.json());

	return data;
}

const JoinUs = () => {
  // const [close, setClose] = useState(1);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [wallet_address, setAddr] = useState("");
  const [success, setSuccess] = useState("");
  
  const {data: joinUsData, refetch} = useQuery(["login", email, phone, name, wallet_address], () => handleJoinUs(email, phone, name, wallet_address), {
		enabled: false,
	});

  useEffect(() => {
    if (joinUsData?.error) {
      console.log(joinUsData);
    } else if (joinUsData?.message) {
      setAddr("");
      setEmail("");
      setPhone("");
      setName("");
      
      setSuccess("Application submitted successfully.");
    }
  }, [joinUsData]);

  return /* !close ? */ (
    <form className=" relative flex flex-col justify-around items-center h-96 w-full px-48 py-2 rounded-lg bg-gradient-to-b from-blue-200 to-purple-300 -z-10">
      {/* <div className="absolute top-0 right-0">
        <button
          className="pr-1 pt-0 text-lg font-semibold"
          onClick={(e) => {
            e.preventDefault();
            setClose(1);
          }}
        >
          x
        </button>
      </div> */}

      <GiBarbedSpear size={100} className="mb-2 text-purple-800" />
      <div className="text-2xl font-semibold">Connect with us!</div>
      <div className="flex flex-col justify-evenly items-center h-2/3 w-full bg-gray-100 p-4 rounded-lg border-4 border-black">
        <div className="border-2 border-black rounded-lg flex justify-left w-full text-gray-600 bg-white ">
          <MdAlternateEmail size={25} />
          <input
            type="text"
            name="name"
            value={email}
            placeholder="Email"
            className="w-full mx-2 "
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="border-2 border-black rounded-lg flex justify-left w-full text-gray-600 bg-white ">
          <HiPhoneArrowDownLeft size={25} />
          <input
            type="text"
            name="name"
            value={phone}
            placeholder="Phone"
            className="w-full mx-2 "
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="border-2 border-black rounded-lg flex justify-left w-full text-gray-600 bg-white ">
          <RxAvatar size={25} />
          <input
            type="text"
            name="name"
            value={name}
            placeholder="Name"
            className="w-full mx-2 "
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="border-2 border-black rounded-lg flex justify-left w-full text-gray-600 bg-white ">
          <FaBitcoin size={25} />
          <input
            type="text"
            name="name"
            value={wallet_address}
            placeholder="Wallet Address"
            className="w-full mx-2 "
            onChange={(e) => setAddr(e.target.value)}
          />
        </div>
        {joinUsData?.error?
            <div className="text-red-500 font-semibold">{joinUsData.data.email || joinUsData.data.phone || joinUsData.data.name ||  joinUsData.data.wallet_address}</div>: null}
        {success !== "" ? 
          <div className="text-green-500 font-semibold">{success}</div>: null
        }
      </div>

      <button className="bg-violet-700 text-white border-2 w-full rounded-lg border-black p-1"
      onClick={(e) => {
        e.preventDefault();
        refetch();
      }}>
        Send
      </button>
    </form>
  /* ) : (
    <button
      className="font-bold"
      onClick={(e) => {
        e.preventDefault();
        setClose(0);
      }}
    >
      Join Us!
    </button> */
  );
};

export default JoinUs;
