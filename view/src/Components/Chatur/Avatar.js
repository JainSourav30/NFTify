import React, { useState } from "react";
import {RxAvatar} from "react-icons/rx";
import { useNavigate } from "react-router";

const Avatar = () => {
    const [showMenu, setShowMenu] = useState(0);

	return (
    	<div className="flex flex-col justify-center">
            <button onClick={(e)=>{e.preventDefault();setShowMenu(!showMenu);}}>
                <RxAvatar size={100} className="m-auto p-0"/>
            </button>
            {showMenu?<ButtonGroup/>: null}
        </div>
    );
}

const ButtonGroup = () =>{

    // const navigate = useNavigate();
    const home = '/home';
    const profile = '/profile-setting';

    return (
    <div className="flex flex-col text-sm justify-evenly flex-nowrap border-black border-2 items-center bg-slate-100 divide-black divide-y text-center rounded-lg">
        <div className="w-full p-2 hover:bg-violet-700 hover:text-white">
            {/* <button onClick={(e)=>{e.preventDefault(); navigate(home);}}>  */}
            Profile Settings
            {/* </button> */}
        </div>
        <div className=" w-full p-2 hover:bg-violet-700 hover:text-white">
            {/* <button onClick={(e)=>{e.preventDefault();navigate(profile);}}> */}
                Log Out
            {/* </button> */}
        </div>
    </div>
    );
}

export default Avatar;