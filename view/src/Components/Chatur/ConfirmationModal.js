import React, {useState} from "react";

const ConfirmationModal = ({warning}) => {
    const [close, setClose] = useState(0);

	return (
        // !close?
    	<div className=" relative flex flex-col justify-around items-center h-56 w-full border-4 p-10 border-black rounded-lg bg-gradient-to-b from-blue-200 to-purple-300 ">
            {/* <div className="absolute top-0 right-0 ">
                <button className="pr-1 pt-0 text-lg font-semibold" onClick={(e)=>{e.preventDefault();setClose(1);}}>x</button>
            </div> */}
            <section className="text-xl font-bold">
                Are you sure you want to {warning}?
            </section>
            <div className="flex w-full justify-around">
                <button className="bg-gray-200 hover:bg-violet-700 hover:text-white border-2 w-1/3 rounded-lg border-black p-1 mt-4 ">Yes</button>
                <button className="bg-violet-700 hover:bg-gray-200 text-white border-2 hover:text-black w-1/3 rounded-lg border-black p-1 mt-4 ">No</button>
            </div>
        </div>
        // :null
    );
}

export default ConfirmationModal;