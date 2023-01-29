import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import useNFTityStore from "../../store";
import ConnRequest from "./ConnRequest";
import { useQuery } from "react-query";

const getAllPending = async (token) => {
    const data = await fetch("http://localhost:5001/api/users/pending", {
        method: "GET",
        headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        }
    }).then(res => res.json());

    return data;
};

const rejectReq = async (token, id) => {
    console.log(id);
    const data = await fetch("http://localhost:5001/api/users/del", {
        method: "DELETE",
        headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({id})
    }).then(res => res.json());

    return data;
};

const acceptReq = async (token, id) => {
    console.log(id);
    const data = await fetch("http://localhost:5001/api/users/approve", {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({id}),
    }).then(res => res.json());

    return data;
};

const Admin = () => {
    const [token, admin, logout] = useNFTityStore(state => [state.jwtToken, state.admin, state.logout]);
    const [data, setData] = useState([]);
    const [id, setID] = useState("");
    const {data: pendingData, refetch: pendingRefetch} = useQuery(['products', token], () => getAllPending(token));
    const {data: delData, refetch: delRefetch} = useQuery(['reject', token, id], () => rejectReq(token, id), {
        enabled: false,
    });
    const navigate = useNavigate();

    useEffect(() => {
        if (admin === null || admin === false) {
            logout();
            navigate("/login");
        }
    }, [admin, logout, navigate]);

    useEffect(() => {
        if (pendingData?.error) {
            logout();
            navigate("/login");    
        } else {
            // console.log(pendingData?.data);
            setData(pendingData?.data);
        }
    }, [pendingData, logout, navigate]);

    useEffect(() => {
        if (delData?.error) {
            logout();
            navigate("/login");    
        } else if (delData?.message) {
            console.log(delData?.data);
            pendingRefetch();
        }
    }, [delData, logout, navigate, pendingRefetch]);

    useEffect(() => {
        if (id !== "") {
            delRefetch();
            setID("");
        }
    }, [id, delRefetch]);

	return (
    	<>
            {data?.map((item, idx) => (
                <ConnRequest
                    key={idx}
                    id={item._id} 
                    name={item.name} 
                    phone={item.phone} 
                    mail={item.email} 
                    address={item.wallet_address}
                    handleReject={() => {
                        setID(item._id);
                    }}
                    handleAccept={() => {}}
                />
            ))}
        </>
    );
}

export default Admin;