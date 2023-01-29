import React from "react";

const ConnRequest = ({name, phone, mail, address, handleAccept, handleReject}) => {

	return (
    	<div className="w-4/5 h-fit bg-gray-200 border-2 border-black rounded flex justify-between bg-gradient-to-r from-purple-300 to-blue-300 p-2">
            <div className=" bg-gray-600 h-full w-4 pl-2"></div>
            <div className="w-3/4">
                <div className="font-semibold text-xl mb-2">{name}</div>
                <div className="flex flex-col ml-6 justify-around">
                    Phone: {phone}
                    <br/>
                    Mail: {mail}
                    <br/>
                    Wallet Address: {address}
                </div>
            </div>
            <div >
                <button className="bg-emerald-500 h-full mx-1 w-16 border-2 border-black rounded-lg" onClick={handleAccept}> Accept</button>
                <button className="bg-red-600 h-full w-16 border-2 border-black rounded-lg" onClick={handleReject}> Reject</button>
            </div>

        
        </div>
    );
}

export default ConnRequest;