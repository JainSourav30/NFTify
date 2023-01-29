import React from "react";

const ButtonGroup = () =>{

    // const navigate = useNavigate();
    const home = '/home';
    const profile = '/profile-setting';

    return (
    <div className="flex flex-col text-sm justify-evenly flex-nowrap border-black border-2 items-center bg-slate-100 divide-black divide-y text-center rounded-lg text-black">
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

export default ButtonGroup;