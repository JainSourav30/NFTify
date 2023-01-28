import React, { useState } from "react";
import {SiVault} from "react-icons/si";
import {GiBarbedSpear} from "react-icons/gi";
import {GiChessRook}  from "react-icons/gi";
import {GiMonkey} from "react-icons/gi";
import {TiSortAlphabeticallyOutline} from "react-icons/ti";

const Verify = () => {

	return (
        <div className="flex flex-col justify-center items-center bg-nft bg-cover">
            <section className="flex flex-col justify-center items-center h-screen w-2/3 ">
                <div className="flex flex-col justify-evenly items-center h-2/3 w-full bg-gray-100 p-4 rounded-lg border-4 border-black m-5 bg-opacity-90">
                    <div className="text-4xl font-semibold m-7">Verify Product</div>
                    {/* <SiVault size={100} className="m-2 text-purple-800"/> */}
                    <GiBarbedSpear size={100} className="mb-2 text-purple-800"/>
                    {/* <GiChessRook size={100} className="m-2 text-purple-800"/>  */}
                    {/* <GiMonkey size={100} className="m-2 text-purple-800"/>  */}
                    <div className="w-2/3 flex flex-col h-fit p-2 items-center" >
                        <div className="text-base font-medium my-4">Enter the product ID</div>
                        <div className="border-2 border-black rounded-lg flex justify-left text-gray-600 bg-white ">
                            <TiSortAlphabeticallyOutline size={30}/>
                            <input type="text" name="name" placeholder="Product ID" className="w-full mx-2 " />
                        </div>
                        <ChooseCompany/>
                        <button className="bg-violet-700 text-white border-2 w-1/3 rounded-lg border-black mt-4 p-1" >Verify</button>
                    </div>
                </div>
            </section>
        </div>
    );
}


const ChooseCompany = () => {
    const [openMenu, setOpenMenu] = useState(0);
    const [choice, setChoice] = useState("Choose the company");

    const companies = ['Addidas', 'Nike', 'Puma'];

    const handleCompany = (company) => {
        setChoice(company);
        setOpenMenu(0);
    }

    return(
        <div class="relative inline-block m-5 w-fit">
            <div>
            <button type="button" class="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm
                hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100" id="menu-button" 
                aria-expanded="true" aria-haspopup="true" onClick={(e)=>{e.preventDefault();setOpenMenu(!openMenu);}} >
            {choice}
            <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
            </svg>
            </button>
            </div>
        {openMenu?
        <div class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
            <div class="py-1" role="none">
                {
                    companies.map((company)=>{
                        return (
                            <button class="text-gray-700 block px-4 py-2 text-sm w-full p-2 hover:bg-violet-700 hover:text-white hover:rounded-xl" role="menuitem" tabindex="-1" id="menu-item-1" onClick={(e)=>{handleCompany(company);}}>{company}</button>
                        );
                    })
                }
                {/* <button class="text-gray-700 block px-4 py-2 text-sm w-full p-2 hover:bg-violet-700 hover:text-white hover:rounded-xl" role="menuitem" tabindex="-1" id="menu-item-0">Name</button>
                <button class="text-gray-700 block px-4 py-2 text-sm w-full p-2 hover:bg-violet-700 hover:text-white hover:rounded-xl" role="menuitem" tabindex="-1" id="menu-item-1">Phone</button>
                <button class="text-gray-700 block px-4 py-2 text-sm w-full p-2 hover:bg-violet-700 hover:text-white hover:rounded-xl" role="menuitem" tabindex="-1" id="menu-item-2">Wallet Address</button>
                <button class="text-gray-700 block px-4 py-2 text-sm w-full p-2 hover:bg-violet-700 hover:text-white hover:rounded-xl" role="menuitem" tabindex="-1" id="menu-item-2">Password</button> */}
            </div>
        </div>
        :
        null
        }
        </div>

    );

}

export default Verify;