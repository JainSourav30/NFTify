import React, { useEffect, useState } from "react";
import {RxAvatar} from "react-icons/rx";
import {MdAlternateEmail} from "react-icons/md";
import {HiPhoneArrowDownLeft} from "react-icons/hi2";
import {FaBitcoin} from "react-icons/fa";

const JoinUs = () => {

    const [close, setClose] = useState(1);

	return (
        !close?
    	(<form className=" relative flex flex-col justify-around items-center h-2/3 w-1/2 border-4 p-10 border-black rounded-lg bg-gradient-to-b from-blue-200 to-purple-300 ">
            <div className="absolute top-0 right-0">
                <button className="pr-1 pt-0 text-lg font-semibold" onClick={(e)=>{e.preventDefault();setClose(1);}}>x</button>
            </div>
            
            <div className="text-2xl font-semibold">Connect with us!</div>

            <div className="flex flex-col justify-evenly items-center h-2/3 w-full bg-gray-100 p-4 rounded-lg border-4 border-black">
                <div className="border-2 border-black rounded-lg flex justify-left w-full text-gray-600 bg-white ">
                    <MdAlternateEmail size={25}/>
                    <input type="text" name="name" placeholder="Email" className="w-full mx-2 "/>
                </div>
                <div className="border-2 border-black rounded-lg flex justify-left w-full text-gray-600 bg-white ">
                    <HiPhoneArrowDownLeft size={25}/>
                    <input type="text" name="name" placeholder="Phone" className="w-full mx-2 " />
                </div>
                <div className="border-2 border-black rounded-lg flex justify-left w-full text-gray-600 bg-white ">
                    <RxAvatar size={25}/>
                    <input type="text" name="name" placeholder="Name" className="w-full mx-2 "/>
                </div>
                <div className="border-2 border-black rounded-lg flex justify-left w-full text-gray-600 bg-white ">
                    <FaBitcoin size={25}/>
                    <input type="text" name="name" placeholder="Wallet Address" className="w-full mx-2 "/>
                </div>
            </div>
                
            <button className="bg-violet-700 text-white border-2 w-full rounded-lg border-black p-1">Send</button>
        </form>)
        :
        <button className="font-bold" onClick={(e)=>{e.preventDefault();setClose(0);}}>Join Us!</button>
    );
}

export default JoinUs;