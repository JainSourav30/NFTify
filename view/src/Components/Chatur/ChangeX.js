import React from "react";

const ChangeX = ({status}) => {

    let to_change
    if(status == 1){to_change = "Name"}
    if(status == 2){to_change = "Phone"}
    if(status == 3){to_change = "Wallet Address"}
    if(status == 4){to_change = "Password"}


	return (
    	<div className="flex flex-col justify-evenly items-center h-60 w-full bg-gray-100 p-4 rounded-lg border-4 border-black mb-5">
            <div className="border-2 border-black rounded-lg flex justify-left w-full text-gray-600 bg-white ">
                {/* <MdAlternateEmail size={25}/> */}
                <input type="text" name="name" placeholder={`New ${to_change}`} className="w-full mx-2 "/>
            </div>
            <div className="border-2 border-black rounded-lg flex justify-left w-full text-gray-600 bg-white ">
                {/* <RiLockPasswordLine size={25}/> */}
                <input type="text" name="name" placeholder={`Confirm New ${to_change}`} className="w-full mx-2 " />
            </div>
            <button className="bg-violet-700 text-white border-2 w-full rounded-lg border-black p-1 mt-4">Confirm Change</button>
        </div>
    );
}

export default ChangeX;