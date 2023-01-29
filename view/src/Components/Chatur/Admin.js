import React from "react";
import ConnRequest from "./ConnRequest";

const Admin = () => {

    const companies = [
        {
            name:'Pranav',
            phone:1234,
            mail:'123@g.com',
            address: '0x133hfee7'
        },
        {
            name:'Raghav',
            phone:23445,
            mail:'123@g.com',
            address: '0x133hfee7'
        },
        {
            name:'Sourav',
            phone:33455,
            mail:'123@g.com',
            address: '0x133hfee7'
        },
        {
            name:'Vatsal',
            phone:7899,
            mail:'123@g.com',
            address: '0x133hfee7'
        },
    ]

	return (
    	<div className="flex flex-col justify-around items-center bg-nft bg-contain h-screen w-full">
            <div className="text-2xl font-bold text-white">Administrator Panel</div>
            {companies.map((company)=>{
                return <ConnRequest name={company.name} phone={company.phone} mail={company.phone} address={company.address}/>
            })}

        </div>
    );
}

export default Admin;