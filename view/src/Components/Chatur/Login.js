import React, { useState } from "react";
import {MdAlternateEmail} from "react-icons/md";
import {RiLockPasswordLine} from "react-icons/ri";
import {SiVault} from "react-icons/si";
import {GiBarbedSpear} from "react-icons/gi";
import {GiChessRook}  from "react-icons/gi";
import {GiMonkey} from "react-icons/gi";

const Login = () => {
    const [close, setClose] = useState(1);

	return (
        !close?
    	<form className=" relative flex flex-col justify-around items-center h-2/3 w-1/2 border-4 p-10 border-black rounded-lg bg-gradient-to-b from-blue-200 to-purple-300 ">
            <div className="absolute top-0 right-0 ">
                <button className="pr-1 pt-0 text-lg font-semibold" onClick={(e)=>{e.preventDefault();setClose(1);}}>x</button>
            </div>

            {/* <SiVault size={100} className="m-2 text-purple-800"/> */}
            <GiBarbedSpear size={100} className="mb-2 text-purple-800"/>
            {/* <GiChessRook size={100} className="m-2 text-purple-800"/>  */}
            {/* <GiMonkey size={100} className="m-2 text-purple-800"/>  */}
            <div className="text-2xl font-semibold m-6">Please Login To Continue</div>
            <div className="flex flex-col justify-evenly items-center h-60 w-full bg-gray-100 p-4 rounded-lg border-4 border-black">
                <div className="border-2 border-black rounded-lg flex justify-left w-full text-gray-600 bg-white ">
                    <MdAlternateEmail size={25}/>
                    <input type="text" name="name" placeholder="Email" className="w-full mx-2 "/>
                </div>
                <div className="border-2 border-black rounded-lg flex justify-left w-full text-gray-600 bg-white ">
                    <RiLockPasswordLine size={25}/>
                    <input type="password" name="name" placeholder="Password" className="w-full mx-2 " />
                </div>
            </div>
            
            <button className="bg-violet-700 text-white border-2 w-full rounded-lg border-black p-1 mt-4">Sign in</button>
        </form>
        :
        <button className="font-bold" onClick={(e)=>{e.preventDefault();setClose(0);}}>Login</button>
    );
}

export default Login;